import reformatDateTime from "./reformatDateTime";

const signatureReduce = data => {
	if(!data || !data.uc_subject_data) return null;

	return prepareSignatureData(getSignatureData(data));
}

const getSignatureData = data => {
	let sign_user_info = Object.keys(data).filter(key => {
		return key.includes('uc_')
	}).reduce((acc, current) => {
		acc[current] = data[current];

		return acc;
	}, {});

	if(data.uc_subject_data) {
		sign_user_info = { ...sign_user_info, ...data.uc_subject_data }
	}

	return {
		sign_thumbprint  : data.uc_thumbprint,
		ts_sign_created  : data.ts_sign_created,
		sign_info        : sign_user_info,
		is_qualified_sign: data.is_qualified_sign,
		is_valid_sign    : data.is_valid_sign
	}
}

const prepareSignatureData = data => {
	const signatureDataKeys = ['sign_thumbprint', 'ts_sign_created', 'sign_info'];
	const userKeys = [
		{
			id: 'Владелец',
			value: 'ФИО владельца'
		},
		{
			id: 'ИНН',
			value: 'ИНН'
		},
		{
			id: 'СНИЛС',
			value: 'СНИЛС'
		},
		{
			id: 'ОГРН',
			value: 'ОГРН'
		},
		{
			id: 'Email',
			value: 'Email'
		},
		{
			id: 'sign_ts',
			value: 'Период действия подписи'
		},
		{
			id: 'org',
			value: 'Организация'
		}
	];

	const signatureData = {
		...data,
		items: []
	}

	signatureDataKeys.forEach(key => {
		if(key in data) {
			switch(key) {
				case 'sign_thumbprint': {
					signatureData.items.push({
						size: '6',
						title: 'Серийный номер сертификата',
						text: data[key],
					})

					break;
				}

				case 'ts_sign_created': {
					signatureData.items.push({
						size: '6',
						title: 'Дата и время подписи',
						text: reformatDateTime(data[key]),
					})

					break;
				}

				case 'sign_info': {
					userKeys.forEach(userKey => {
						switch (userKey.id) {
							case 'sign_ts': {
								signatureData.items.push({
									size: '6',
									title: userKey.value,
									text: 'c ' + reformatDateTime(data[key].uc_ts_from) + ' по ' + reformatDateTime(data[key].uc_ts_to),
								});

								break;
							}

							case 'ИНН': {
								signatureData.items.push({
									size: '6',
									title: userKey.value,
									text: data[key]['ИНН_ЮЛ'] || data[key]['ИНН'] || '-',
								});

								break;
							}

							case 'ОГРН': {
								if(data[key]['ОГРН']) {
									// Юр лицо
									signatureData.items.push({
										size: '6',
										title: 'ОГРН',
										text: data[key]['ОГРН'],
									});
								} else {
									// ИП
									signatureData.items.push({
										size: '6',
										title: 'ОГРНИП',
										text: data[key]['ОГРНИП'] || '–',
									});
								}

								break;
							}

							case 'org': {
								if(data[key]['ОГРН']) {
									// Юр лицо
									const org_address = [data[key]['Регион'], data[key]['Город'], data[key]['Адрес']]
										.filter(text => text !== '')
										.join(', ');

									const org_text = data[key]['Компания'] || '';
									const org_address_text = org_address ? 'Юридический адрес: ' + org_address : '';

									const dataText = [org_text, org_address_text].filter(text => text !== '');

									signatureData.items.push({
										size: '12',
										title: userKey.value,
										text: !!dataText.length ? dataText.join(', ') : '–',
									});
								} else {
									// ИП
									signatureData.items.push({
										size: '6',
										title: userKey.value,
										text: data[key]['Владелец'] ? 'ИП ' + data[key]['Владелец'] : '–',
									});
								}

								break;
							}

							default: {
								signatureData.items.push({
									size: '6',
									title: userKey.value,
									text: data[key][userKey.id] ? data[key][userKey.id] : '–',
								});

								break;
							}
						}
					});

					break;
				}
			}
		}
	});

	return signatureData;
}

export { signatureReduce, getSignatureData, prepareSignatureData };

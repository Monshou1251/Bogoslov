const getFieldFileSettings = (field, fileTypes) => {
	const fieldSettings = {};

	const id_voc_file_type = field.id_voc_file_type || 0;
	const voc_file_type = fileTypes.find(fileType => fileType.id === id_voc_file_type);

	if(!voc_file_type) return;

	fieldSettings.accept = voc_file_type.exts;
	fieldSettings.maxSize = voc_file_type.max_size * 1000000;
	fieldSettings.tooltip = {};
	fieldSettings.tooltip.text = `До ${voc_file_type.max_size}Мб., ${voc_file_type.exts.toUpperCase()}`;

	return fieldSettings;
};

export default getFieldFileSettings;

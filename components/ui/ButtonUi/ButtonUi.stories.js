import ButtonUi from "./ButtonUi.vue";
import { fn } from "@storybook/test";

// Export for Button Stories
export default {
	title: "UI/ButtonUi",
	component: ButtonUi,
	tags: ["autodocs"],
	args: { onClick: fn() },
};

function generateButtonTable(buttonsByCategory) {
	const sizes = ["lg", "md", "sm", "xs"];

	const generateCells = (buttons, isDisabled) => {
		return sizes
			.map((size) => {
				const button = buttons.find(
					(btn) => btn.size === size && btn.disabled === isDisabled
				);
				if (button) {
					return `
          <td style="padding: 10px; height: 50px; border-bottom: 1px dashed #ddd; text-align: left; width: 20%;">
            <ButtonUi
              text="${button.text}"
              secondaryText="${button.secondaryText || ""}"
              theme="${button.theme}"
              type="${button.type || ""}"
              size="${size}"
              :disabled="${button.disabled}"
              icon="${button.icon}"
              iconPosition="${button.iconPosition}"
			  counter="${button.counter || ""}"
            />
          </td>
        `;
				} else {
					return `
          <td style="padding: 10px; height: 50px; border-bottom: 1px dashed #ddd; text-align: left; width: 20%;">
            <!-- Empty cell for ${size} -->
          </td>
        `;
				}
			})
			.join("");
	};

	const generateRowsForCategory = (category, buttons) => {
		const activeCells = generateCells(buttons, false);
		const disabledButtons = buttons.filter((btn) => btn.disabled);
		const disabledCells = generateCells(buttons, true);

		let rows = `
		  <tr>
			<td colspan="5" style="font-family: 'Suisse Intl'; font-size: 14px; color: #555; padding: 25px 5px 5px 5px; text-align: left; border-bottom: 1px dashed #ddd;">
			  ${category}
			</td>
		  </tr>
		  <tr>
			<td style="font-family: 'Suisse Intl'; font-size: 12px; color: #888888; text-align: left; padding: 10px; border-bottom: 1px dashed #ddd; height: 50px;">
			  Rest
			</td>
			${activeCells}
		  </tr>
		`;

		if (disabledButtons.length > 0) {
			rows += `
			<tr>
			  <td style="font-family: 'Suisse Intl'; font-size: 12px; color: #888888; text-align: left; padding: 10px; border-bottom: 1px dashed #ddd; height: 50px;">
				Disabled
			  </td>
			  ${disabledCells}
			</tr>
		  `;
		}

		return rows;
	};

	const categories = Object.keys(buttonsByCategory);
	const rowsForAllCategories = categories
		.map((category) =>
			generateRowsForCategory(category, buttonsByCategory[category])
		)
		.join("");

	return `
    <table style="width: 100%; border-collapse: collapse; table-layout: fixed;">
      <!-- Single header row for all button types -->
      <thead>
        <tr style="font-family: 'Suisse Intl'; font-size: 12px; color: #888888; text-align: left; padding: 10px;">
          <th style="padding: 10px; border-bottom: 1px dashed #ddd;">State</th>
          <th style="padding: 10px; border-bottom: 1px dashed #ddd;">L</th>
          <th style="padding: 10px; border-bottom: 1px dashed #ddd;">M</th>
          <th style="padding: 10px; border-bottom: 1px dashed #ddd;">S</th>
          <th style="padding: 10px; border-bottom: 1px dashed #ddd;">XS</th>
        </tr>
      </thead>
      <tbody>
        ${rowsForAllCategories}
      </tbody>
    </table>
  `;
}

function groupButtonsByTypeAndIcon(buttons) {
	return buttons.reduce((acc, button) => {
		const type = button.type || null;
		const hasIcon = button.icon ? "Icon=True" : "Icon=False";
		const hasCounter = button.counter ? `Counter=True` : null;
		const iconPosition = button.iconPosition
			? `IconPosition=${button.iconPosition}`
			: null;

		let category = hasIcon;

		if (type) {
			category = `Type=${type.charAt(0).toUpperCase() + type.slice(1)}, ${category}`;
		}

		if (hasCounter) {
			category += `, ${hasCounter}`;
		}

		// Append icon position if it exists
		if (iconPosition) {
			category += `, ${iconPosition}`;
		}

		if (!acc[category]) {
			acc[category] = [];
		}
		acc[category].push(button);

		return acc;
	}, {});
}


export const ButtonGrand = {
	render() {
		const buttons = [
			{
				text: "Скачать выпуск",
				secondaryText: "4.5 МБ, PDF",
				theme: "grand",
				type: "primary",
				size: "lg",
				disabled: false,
				iconAppend: "download",
			},
			{
				text: "Поделиться",
				secondaryText: "",
				theme: "grand",
				type: "secondary",
				size: "lg",
				disabled: false,
				iconAppend: "share",
			},
			{
				text: "Поделиться",
				secondaryText: "",
				theme: "grand",
				type: "secondary",
				size: "lg",
				disabled: false,
				iconAppend: "share",
			},
			{
				text: "Комментарии",
				secondaryText: "",
				counter: "(12)",
				theme: "grand",
				type: "secondary",
				size: "lg",
				disabled: false,
				iconAppend: "citation",
			},
			{
				text: "Комментарии",
				secondaryText: "",
				counter: "(12)",
				theme: "grand",
				type: "secondary",
				size: "lg",
				disabled: false,
				iconAppend: "citation",
			},
			{
				text: "Содержание",
				secondaryText: "",
				theme: "grand",
				type: "secondary",
				size: "lg",
				disabled: false,
				iconAppend: "index",
			},
			{
				text: "Содержание",
				secondaryText: "",
				theme: "grand",
				type: "secondary",
				size: "lg",
				disabled: false,
				iconAppend: "index",
			},
		];

		const buttonsByCategory = groupButtonsByTypeAndIcon(buttons);

		return {
			components: { ButtonUi },
			template: generateButtonTable(buttonsByCategory),
		};
	},
};

export const ButtonGeneral = {
	render() {
		const buttons = [
			{
				text: "Подать статью",
				theme: "general",
				type: "primary",
				size: "lg",
				disabled: false,
				icon: "",
			},
			{
				text: "Подать статью",
				theme: "general",
				type: "primary",
				size: "lg",
				disabled: true,
			},
			{
				text: "Экспорт",
				theme: "general",
				type: "primary",
				size: "md",
				disabled: false,
				icon: "download",
				iconPosition: "left",
			},
			{
				text: "Экспорт",
				theme: "general",
				type: "primary",
				size: "md",
				disabled: true,
				icon: "download",
				iconPosition: "left",
			},
			{
				text: "Открыть PDF",
				theme: "general",
				type: "secondary",
				size: "md",
				disabled: false,
				icon: "doc",
				iconPosition: "left",
			},
			{
				text: "Открыть PDF",
				theme: "general",
				type: "secondary",
				size: "md",
				disabled: true,
				icon: "doc",
				iconPosition: "left",
			},
		];

		const buttonsByCategory = groupButtonsByTypeAndIcon(buttons);

		return {
			components: { ButtonUi },
			template: generateButtonTable(buttonsByCategory),
		};
	},
};

export const ButtonGhost = {
	render() {
		const buttons = [
			{
				text: "Button",
				theme: "general",
				type: "ghost",
				size: "lg",
				disabled: false,
				icon: "copy",
				iconPosition: "left",
			},
			{
				text: "Button",
				theme: "general",
				type: "ghost",
				size: "sm",
				disabled: false,
				icon: "copy",
				iconPosition: "left",
			},
			{
				text: "Button",
				theme: "general",
				type: "ghost",
				size: "xs",
				disabled: false,
				icon: "copy",
				iconPosition: "left",
			},
			{
				text: "Button",
				theme: "general",
				type: "ghost",
				size: "xs",
				disabled: true,
				icon: "copy",
				iconPosition: "left",
			},
			{
				text: "Button",
				theme: "general",
				type: "ghost",
				size: "lg",
				disabled: false,
				icon: "arrow-right",
				iconPosition: "right",
			},
			{
				text: "Button",
				theme: "general",
				type: "ghost",
				size: "sm",
				disabled: false,
				icon: "arrow-right",
				iconPosition: "right",
			},
			{
				text: "Button",
				theme: "general",
				type: "ghost",
				size: "xs",
				disabled: false,
				icon: "arrow-right",
				iconPosition: "right",
			},
			{
				text: "Button",
				theme: "general",
				type: "ghost",
				size: "lg",
				disabled: true,
				icon: "arrow-right",
				iconPosition: "right",
			},
			{
				text: "Button",
				theme: "general",
				type: "ghost",
				size: "sm",
				disabled: true,
				icon: "arrow-right",
				iconPosition: "right",
			},
			{
				text: "Button",
				theme: "general",
				type: "ghost",
				size: "xs",
				disabled: true,
				icon: "arrow-right",
				iconPosition: "right",
			},
			{
				text: "Button",
				theme: "general",
				type: "ghost",
				size: "lg",
				disabled: false,
			},
			{
				text: "Button",
				theme: "general",
				type: "ghost",
				size: "lg",
				disabled: true,
				icon: false,
			},
		];

		const buttonsByCategory = groupButtonsByTypeAndIcon(buttons);

		return {
			components: { ButtonUi },
			template: generateButtonTable(buttonsByCategory),
		};
	},
};

export const ButtonMore = {
	render() {
		const buttons = [
			{
				text: "Подробнее",
				theme: "more",
				// type: "secondary",
				size: "md",
				disabled: false,
				icon: "caret-down",
				iconPosition: "right",
				active: true,
			},
		];

		const buttonsByCategory = groupButtonsByTypeAndIcon(buttons);

		return {
			components: { ButtonUi },
			template: generateButtonTable(buttonsByCategory),
		};
	},
};

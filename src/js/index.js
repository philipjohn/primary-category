import PrimaryCategorySelector from "./primary-category-selector";

const { __ } = wp.i18n;
const { registerPlugin } = wp.plugins;
const { PluginDocumentSettingPanel } = wp.editPost;
const { Fragment } = wp.element;

registerPlugin("primary-category", {
	icon: '',
	render: () => {
		return (
			<Fragment>
				<PluginDocumentSettingPanel
					title={__('Primary Category', 'primary-category')}
				>
					<PrimaryCategorySelector />
				</PluginDocumentSettingPanel>
			</Fragment>
		);
	},
});

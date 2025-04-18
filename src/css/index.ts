import haAssistChip from './ha-assist-chip.css';
import haButton from './ha-button.css';
import haCard from './ha-card.css';
import haDialog from './ha-dialog.css';
import haEntityToggle from './ha-entity-toggle.css';
import haFab from './ha-fab.css';
import haGridLayoutSlider from './ha-grid-layout-slider.css';
import haListItem from './ha-list-item.css';
import haMdDialog from './ha-md-dialog.css';
import haMdMenuItem from './ha-md-menu-item.css';
import haMoreInfoInfo from './ha-more-info-info.css';
import haSidebar from './ha-sidebar.css';
import haSlider from './ha-slider.css';
import haSwitch from './ha-switch.css';
import haTabs from './ha-tabs.css';
import haTextfield from './ha-textfield.css';
import haToast from './ha-toast.css';
import haUserBadge from './ha-user-badge.css';
import hassSubpage from './hass-subpage.css';
import huiEntitiesCard from './hui-entities-card.css';
import huiGridSection from './hui-grid-section.css';
import huiRoot from './hui-root.css';
import huiViewVisibilityEditor from './hui-view-visibility-editor.css';

/**
 * Home Assistant (and other) custom elements to patch and their corresponding styles
 */
export const elements: Record<string, string> = {
	// Higher priority elements first
	'ha-user-badge': haUserBadge,
	'ha-sidebar': haSidebar,
	'ha-tabs': haTabs,
	'paper-tabs': haTabs,
	'hui-root': huiRoot,
	'ha-fab': haFab,
	'hui-grid-section': huiGridSection,

	'ha-card': haCard,
	'ha-assist-chip': haAssistChip,
	'ha-button': haButton,
	'mwc-button': haButton,
	'ha-dialog': haDialog,
	'ha-md-dialog': haMdDialog,
	'ha-entity-toggle': haEntityToggle,
	'ha-grid-layout-slider': haGridLayoutSlider,
	'ha-list-item': haListItem,
	'mwc-list-item': haListItem,
	'ha-md-menu-item': haMdMenuItem,
	'ha-more-info-info': haMoreInfoInfo,
	'ha-slider': haSlider,
	'md-slider': haSlider,
	'ha-switch': haSwitch,
	'ha-textfield': haTextfield,
	'ha-toast': haToast,
	'hass-subpage': hassSubpage,
	'hass-tabs-subpage': hassSubpage,
	'hui-entities-card': huiEntitiesCard,
	'hui-view-visibility-editor': huiViewVisibilityEditor,
};

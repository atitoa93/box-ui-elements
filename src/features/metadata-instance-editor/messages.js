import { defineMessages } from 'react-intl';

const messages = defineMessages({
    customTitle: {
        defaultMessage: 'Custom Metadata',
        description: 'title of the custom metadata card',
        id: 'boxui.metadataInstanceEditor.customTitle',
    },
    customAdd: {
        defaultMessage: 'Add',
        description: 'Label for the add button for custom metadata',
        id: 'boxui.metadataInstanceEditor.customAdd',
    },
    customRemove: {
        defaultMessage: 'Remove',
        description: 'Label for the remove button for custom metadata',
        id: 'boxui.metadataInstanceEditor.customRemove',
    },
    customKey: {
        defaultMessage: 'Key',
        description: 'Label for the key field for custom metadata',
        id: 'boxui.metadataInstanceEditor.customKey',
    },
    customKeyPlaceholder: {
        defaultMessage: 'e.g. Order Number',
        description: 'Placeholder for the key field for custom metadata',
        id: 'boxui.metadataInstanceEditor.customKeyPlaceholder',
    },
    customValue: {
        defaultMessage: 'Value',
        description: 'Label for the value field for custom metadata',
        id: 'boxui.metadataInstanceEditor.customValue',
    },
    customValuePlaceholder: {
        defaultMessage: 'e.g. 42',
        description: 'Placeholder for the value field for custom metadata',
        id: 'boxui.metadataInstanceEditor.customValuePlaceholder',
    },
    customNewField: {
        defaultMessage: 'New Field',
        description: 'Title for the new field section for custom metadata',
        id: 'boxui.metadataInstanceEditor.customNewField',
    },
    customNewFieldMessage: {
        defaultMessage: 'Add a custom metadata field. Other people will be able to see and search for this field.',
        description: 'Description for the new field section for custom metadata',
        id: 'boxui.metadataInstanceEditor.customNewFieldMessage',
    },
    customErrorRequired: {
        defaultMessage: 'A key is required.',
        description: 'Error enforcing required key for custom metadata',
        id: 'boxui.metadataInstanceEditor.customErrorRequired',
    },
    customErrorDuplicateKey: {
        defaultMessage: 'A field with that key already exists.',
        description: 'Error enforcing unique key for custom metadata',
        id: 'boxui.metadataInstanceEditor.customErrorDuplicateKey',
    },
    customErrorInternalKey: {
        defaultMessage: 'Keys cannot begin with a $.',
        description: 'Error enforcing non internal key for custom metadata',
        id: 'boxui.metadataInstanceEditor.customErrorInternalKey',
    },
    invalidInput: {
        defaultMessage: 'Invalid Input!',
        description: 'Error message displayed if the user enters a badly formatted value in metadata text box',
        id: 'boxui.metadataInstanceEditor.invalidValue',
    },
    invalidMetadataFieldType: {
        defaultMessage: 'Invalid metadata field type!',
        description: 'Error message displayed if the template has an field type we dont recognize',
        id: 'boxui.metadataInstanceEditor.invalidMetadataFieldType',
    },
    metadataEditTooltip: {
        defaultMessage: 'Edit Metadata',
        description: 'Text that shows in a tooltip above the edit pencil button.',
        id: 'boxui.metadataInstanceEditor.editTooltip',
    },
    metadataFieldNoValue: {
        defaultMessage: 'No Value',
        description: 'Text to indicate no value exists',
        id: 'boxui.metadataInstanceEditor.fieldNoValue',
    },
    metadataFieldSelectValue: {
        defaultMessage: 'Select Value',
        description: 'Text to indicate to select a value from drop down list',
        id: 'boxui.metadataInstanceEditor.fieldSelectValue',
    },
    metadataFieldMultiSelectValue: {
        defaultMessage: 'Select Values',
        description: 'Text to indicate to select one or more values from drop down list',
        id: 'boxui.metadataInstanceEditor.fieldMultiSelectValue',
    },
    metadataFieldSetValue: {
        defaultMessage: 'Set Value',
        description: 'Text to indicate to set a value',
        id: 'boxui.metadataInstanceEditor.fieldSetValue',
    },
    metadataFieldSetDate: {
        defaultMessage: 'Set Date',
        description: 'Text to indicate to set a date',
        id: 'boxui.metadataInstanceEditor.fieldSetDate',
    },
    metadataRemoveTemplate: {
        defaultMessage: 'Remove',
        description: 'Label to remove a template',
        id: 'boxui.metadataInstanceEditor.removeTemplate',
    },
    fileMetadataRemoveTemplateConfirm: {
        defaultMessage: 'Are you sure you want to delete "{metadataName}" and all of its values from this file?',
        description:
            'Message for users who may attempt to remove a metadata instance for a file, which is non-recoverable',
        id: 'boxui.metadataInstanceEditor.fileMetadataRemoveTemplateConfirm',
    },
    folderMetadataRemoveTemplateConfirm: {
        defaultMessage:
            'Are you sure you want to delete "{metadataName}" and all of its values? Any metadata template values already applied to files in this folder will not be deleted.',
        description:
            'Message for users who may attempt to remove a metadata instance for a folder, which is non-recoverable',
        id: 'boxui.metadataInstanceEditor.folderMetadataRemoveTemplateConfirm',
    },
    fileMetadataRemoveCustomTemplateConfirm: {
        defaultMessage: 'Are you sure you want to delete this custom metadata and all of its values from this file?',
        description:
            'Message for users who may attempt to remove a custom metadata instance for a file. Also non-recoverable',
        id: 'boxui.metadataInstanceEditor.fileMetadataRemoveCustomTemplateConfirm',
    },
    folderMetadataRemoveCustomTemplateConfirm: {
        defaultMessage:
            'Are you sure you want to delete this custom metadata and all of its values? Any metadata template values already applied to files in this folder will not be deleted.',
        description:
            'Message for users who may attempt to remove a custom metadata instance for a folder. Also non-recoverable',
        id: 'boxui.metadataInstanceEditor.folderMetadataRemoveCustomTemplateConfirm',
    },
    metadataTemplateSearchPlaceholder: {
        defaultMessage: 'Search all templates',
        description: 'Placeholder to search for all templates',
        id: 'boxui.metadataInstanceEditor.templateSearchPlaceholder',
    },
    metadataTemplateAdd: {
        defaultMessage: 'Add',
        description: 'Label to add a template',
        id: 'boxui.metadataInstanceEditor.templateAdd',
    },
    metadataTemplatesTitle: {
        defaultMessage: 'Templates',
        description: 'Overall title of metadata',
        id: 'boxui.metadataInstanceEditor.templatesTitle',
    },
    metadataTemplatesNoResults: {
        defaultMessage: 'No Results',
        description: 'Text to indicate no templates found by searching',
        id: 'boxui.metadataInstanceEditor.templatesNoResults',
    },
    metadataTemplatesFetchFailed: {
        defaultMessage: 'Sorry! We could not fetch templates. Please contact your administrator',
        description: 'Text to indicate that we failed to fetch templates',
        id: 'boxui.metadataInstanceEditor.templatesFetchFailed',
    },
    metadataTemplatesNoRemainingTemplates: {
        defaultMessage: 'All templates have been added',
        description: 'Text to indicate that all the templates have been added',
        id: 'boxui.metadataInstanceEditor.templatesNoRemainingTemplates',
    },
    metadataTemplatesServerHasNoTemplates: {
        defaultMessage: 'Zero templates',
        description: 'Text to indicate that the server has no templates',
        id: 'boxui.metadataInstanceEditor.templatesServerHasNoTemplates',
    },
    metadataSave: {
        defaultMessage: 'Save',
        description: 'Label for save button',
        id: 'boxui.metadataInstanceEditor.metadataSave',
    },
    metadataCancel: {
        defaultMessage: 'Cancel',
        description: 'Label for cancel button',
        id: 'boxui.metadataInstanceEditor.metadataCancel',
    },
    metadataCascadePolicyEnabledInfo: {
        defaultMessage:
            'This template and its values are being cascaded to all items in this folder and its subfolders.',
        description: 'Informational text shown in metadata modal when cascading is turned on for current folder',
        id: 'boxui.metadataInstanceEditor.metadataCascadePolicyEnabledInfo',
    },
    noMetadata: {
        defaultMessage: 'No Metadata Applied',
        description: 'Text to display when no metadata is applied to folder',
        id: 'boxui.metadataInstanceEditor.noMetadata',
    },
    noMetadataAddTemplate: {
        defaultMessage: "Click 'Add' in the top right to add metadata to this item",
        description: 'Instructions to create metadata for the selected folder',
        id: 'boxui.metadataInstanceEditor.noMetadataAddTemplate',
    },
    enableCascadePolicy: {
        defaultMessage: 'Enable cascade policy',
        description: 'Label for enable cascade policy toggle switch',
        id: 'boxui.metadataInstanceEditor.enableCascadePolicy',
    },
    applyCascadePolicyText: {
        defaultMessage:
            'Apply template and its values to all new and existing items in this folder and its subfolders.',
        description: 'Informational text below enable cascade policy toggle switch',
        id: 'boxui.metadataInstanceEditor.applyCascadePolicyText',
    },
    cannotApplyCascadePolicyText: {
        defaultMessage: 'Cascade policy cannot be applied to custom metadata at this time.',
        description:
            'Informational text below enable cascade policy toggle switch indicating that cascade policy cannot be applied',
        id: 'boxui.metadataInstanceEditor.cannotApplyCascadePolicyText',
    },
    cascadePolicyLearnMore: {
        defaultMessage: 'Learn more',
        description: 'Tooltip text a user can use to learn more about cascading metadata policy',
        id: 'boxui.metadataInstanceEditor.cascadePolicyLearnMore',
    },
    cascadePolicyModeQuestion: {
        defaultMessage:
            'In the case of conflicts when applying this template and its values to existing items, what would you like to do?',
        description:
            'Tooltip text that asks the user what they want to do when applying cascading to their metadata policy',
        id: 'boxui.metadataInstanceEditor.cascadePolicyModeQuestion',
    },
    cascadePolicySkipMode: {
        defaultMessage: 'Skip and keep all existing template values',
        description: 'Label for radio button that selects skip mode for cascading policy',
        id: 'boxui.metadataInstanceEditor.cascadePolicySkipMode',
    },
    cascadePolicyOverwriteMode: {
        defaultMessage: 'Overwrite all existing template values',
        description: 'Label for radio button that selects overwrite mode for cascading policy',
        id: 'boxui.metadataInstanceEditor.cascadePolicyOverwriteMode',
    },
    allAttributesAreHidden: {
        defaultMessage: 'All attributes in this template have been hidden.',
        description:
            'Informational text below collapsible header indicating that all fields for this template are hidden',
        id: 'boxui.metadataInstanceEditor.allAttributesAreHidden',
    },
    noAttributesForTemplate: {
        defaultMessage: 'There are no attributes in this template.',
        description:
            'Informational text below collapsible header indicating that there are no attributes for this template',
        id: 'boxui.metadataInstanceEditor.noAttributesForTemplate',
    },
});

export default messages;
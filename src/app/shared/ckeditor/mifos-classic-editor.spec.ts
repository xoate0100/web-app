import MifosClassicEditor from './mifos-classic-editor';

describe('MifosClassicEditor', () => {
  it('should define classic editor plugins and toolbar', () => {
    expect(MifosClassicEditor).toBeDefined();
    expect(MifosClassicEditor.builtinPlugins.length).toBeGreaterThan(0);
    expect(MifosClassicEditor.defaultConfig.toolbar.items).toContain('bold');
    expect(MifosClassicEditor.defaultConfig.toolbar.items).toContain('heading');
  });
});

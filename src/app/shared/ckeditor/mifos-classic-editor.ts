import {
  Autoformat,
  BlockQuote,
  Bold,
  ClassicEditor,
  Essentials,
  Heading,
  Italic,
  Link,
  List,
  Paragraph,
  Undo,
} from 'ckeditor5';

/**
 * Classic editor configuration matching the former predefined build feature set
 * used by the Templates feature (create/edit template screens).
 */
export default class MifosClassicEditor extends ClassicEditor {
  public static override builtinPlugins = [
    Essentials,
    Autoformat,
    Bold,
    Italic,
    BlockQuote,
    Heading,
    Link,
    List,
    Paragraph,
    Undo,
  ];

  public static override defaultConfig = {
    toolbar: {
      items: [
        'heading',
        '|',
        'bold',
        'italic',
        'link',
        'bulletedList',
        'numberedList',
        '|',
        'blockQuote',
        'undo',
        'redo',
      ],
    },
    language: 'en',
  };
}

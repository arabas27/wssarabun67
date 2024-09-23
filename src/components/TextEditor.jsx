// Require Editor CSS files.
import "froala-editor/css/froala_style.min.css";
import "froala-editor/css/froala_editor.pkgd.min.css";

// Import all Froala Editor plugins;
import "froala-editor/js/plugins.pkgd.min.js";
// Import Froala editor component
import FroalaEditorComponent from "react-froala-wysiwyg";

// Default export
export default function TextEditor() {
  const config = {
    // documentReady: true,
    heightMin: "300",
    events: {
      contentChanged: function (e) {
        console.log(e);
      },
    },
  };

  return (
    <div className="editor">
      <FroalaEditorComponent tag="textarea" config={config} />
    </div>
  );
}

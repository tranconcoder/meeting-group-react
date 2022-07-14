import { useRef } from 'react';

import SunEditor from 'suneditor-react';
import 'suneditor/dist/css/suneditor.min.css'; // Import Sun Editor's CSS File

function EditTextPage() {
	const editor = useRef<any>();

	const getSunEditorInstance = (sunEditor: any) => {
		editor.current = sunEditor;
	};

	return (
		<div>
			<p> My Other Contents </p>
			<SunEditor getSunEditorInstance={getSunEditorInstance} />
		</div>
	);
}

export default EditTextPage;

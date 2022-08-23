export const fileUpload = async (file) => {
	//if( !file ) throw new Error('No tenemos ningun archivo a subir');
	if (!file) return null;

	const clodUrl = 'https://api.cloudinary.com/v1_1/diaryjournalapp/upload';

	const formData = new FormData();
	formData.append('upload_preset', 'prueba');
	formData.append('file', file);

	try {
		const resp = await fetch(clodUrl, {
			method: 'POST',
			body: formData,
		});

		if (!resp.ok) throw new Error('No se pudo subir imagen');

		const cloudResp = await resp.json();

		return cloudResp.secure_url;
	} catch (error) {
		 console.log(error);
		// throw new Error (error.message);
		return null;
	}
};

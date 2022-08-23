import { v2 as cloudinary } from 'cloudinary';
import { fileUpload } from '../../src/helpers/fileUpload';

cloudinary.config({
	cloud_name: 'diaryjournalapp',
	api_key: '582722388525469',
	api_secret: 'Nb_r8RDwRVbF95AuVgmRdfCK3QQ',
	secure: true,
});
describe('Pruebas en fileUlpload', () => {
	test('debe de subir el archivo correctamente a cloudinary', async () => {
		const imageUrl =
			'https://img1.ak.crunchyroll.com/i/spire2/a6e36e575f9d9d38d1cf40d6769980a31651739960_main.jpg';
		const resp = await fetch(imageUrl);
		const blob = await resp.blob();
		const file = new File([blob], 'foto.jpg');

		const url = await fileUpload(file);
		expect(typeof url).toBe('string');

		const segments = url.split('/');
		const imageId = segments[segments.length - 1].replace('.jpg', '');

		const cloudResp = await cloudinary.api.delete_resources(
			['journal/' + imageId],
			{
				resource_type: 'image',
			},
		);
	});

	test('debe de retornar null', async () => {
		const file = new File([], 'foto.jpd');
		const url = await fileUpload(file);
		expect(url).toBe(null);
	});
});

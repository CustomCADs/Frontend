import fs from 'fs';
import path from 'path';
import child_process from 'child_process';

export const readCerts = () => {
	const certPath = 'certs/cert.pem';
	const certFilePath = path.resolve(__dirname, certPath);

	const keyPath = 'certs/key.pem';
	const keyFilePath = path.resolve(__dirname, keyPath);

	if (!fs.existsSync(certFilePath) || !fs.existsSync(keyFilePath)) {
		child_process.spawnSync('mkdir', ['certs']);
		child_process.spawnSync('openssl', [
			'req',
			'-x509',
			'-newkey',
			'rsa:4096',
			'-nodes',
			'-keyout',
			certPath,
			'-out',
			keyPath,
			'-days',
			'365',
			'-subj',
			'/CN=localhost',
			'-addext',
			'subjectAltName = DNS:localhost, IP:127.0.0.1',
		]);
	}

	return {
		key: fs.readFileSync(keyFilePath),
		cert: fs.readFileSync(certFilePath),
	};
};

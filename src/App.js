import i18n from 'i18next';
import { useTranslation } from 'react-i18next';

function App() {
	const { t } = useTranslation();

	const lngs = [
		{
			code: 'en',
			nativeName: 'English',
		},
		{
			code: 'fr',
			nativeName: 'Francais',
		},
		{
			code: 'es',
			nativeName: 'Spanish',
		},
		{
			code: 'ar',
			nativeName: 'Arabic',
		},
	];
	return (
		<div className="max-w-2xl m-auto mt-40">
			<h2 className="text-4xl text-center font-bold text-gray-900 mb-6">
				{t('Welcome.text')}
			</h2>
			<div className="space-y-6 text-center text-gray-800">
				<p>{t('Welcome.description')}</p>
				<p>{t('paragraphs.paragraph_1')}</p>
				<p>{t('paragraphs.paragraph_2')}</p>
			</div>
			<p className="font-bold text-center mt-6">
				{t('interpolation_pluralization.text', { count: 5 })}
			</p>
			<div className="Footer">
				<p className="text-center mt-6 italic">
					{t('paragraphs.date', { date: new Date() })}
				</p>
			</div>
			<div className="text-center mt-10">
				{lngs.map((lng) => {
					return (
						<button
							className="m-4 p-2 bg-blue-600 rounded"
							key={lng.code}
							style={{
								fontWeight:
									i18n.resolvedLanguage === lng.code ? 'bold' : 'normal',
							}}
							type="submit"
							onClick={() => i18n.changeLanguage(lng.code)}
						>
							{lng.nativeName}
						</button>
					);
				})}
			</div>
		</div>
	);
}

export default App;

import ViewShot from "react-native-view-shot";
import RNHTMLtoPDF from 'react-native-html-to-pdf';
import Share from 'react-native-share';
import { View } from "react-native";

const ShareTeams = () => {
  const viewShotRef = useRef();

  const capturarYCompartir = async () => {
    try {
      // Capturar la pantalla
      const uri = await viewShotRef.current.capture();

      // Convertir a PDF
      const options = {
        html: `<img src="${uri}" alt="captura" />`,
        fileName: 'captura',
        directory: 'Documents',
      };

      const file = await RNHTMLtoPDF.convert(options);

      // Compartir
      await Share.open({
        url: `file://${file.filePath}`,
        type: 'application/pdf',
        social: Share.Social.WHATSAPP,
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View>

        <ViewShot ref={viewShotRef} options={{ format: "jpg", quality: 0.9 }}>
          {/* Tus componentes aquí */}
        </ViewShot>
        <Button title="Compartir en WhatsApp" onPress={capturarYCompartir} />
    </View>
  );
};


  Webcam.set({
    width:350,
    height:300,
    image_format : 'png',
    png_quality:90
  });

//Coloque o id da camera
  camera = document.getElementById("???");

Webcam.attach( '#camera' );

      
 //Crie uma função que se chama 'take_snapshot'
???
{
/* A função Webcam.snap() é um método da biblioteca Webcam.js, que fornece 
uma interface fácil de usar para acessar a webcam e tirar fotos.
Adicione essa função abaixo:*/
    ???(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';
    });
}
 
 /*Adcione o link do seu teachale machine */
  
classifier = ml5.imageClassifier('???/model.json',modelLoaded);

/*Crie uma função que se chama  'check'
      
  ???
  {
  /*essa parte do código é responsável por enviar a imagem capturada pela webcam 
  para a biblioteca de classificação de imagem e aguardar a resposta.  */
    img = document.getElementById('captured_image');
    classifier.classify(img, gotResult);
  }


function gotResult(error, results) {
  if (error) {
  /* Se ocorrer um erro durante a classificação, a função exibirá o erro no console usando o método console.error().*/
    ???(error);
  } else {
    console.log(results);
    document.getElementById("result_object_name").innerHTML = results[0].label;
    /* . A precisão (confiança) da classificação é definida como o valor da propriedade confidence do mesmo objeto e é 
    arredondada para três casas decimais usando o método toFixed().*/
    document.getElementById("result_object_accuracy").innerHTML = results[0].confidence.???(3);
  }
}

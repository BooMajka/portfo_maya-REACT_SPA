import React from 'react';
import photo from "../assets/me.jpeg";


function About() {

	return (
    <>
      <div className="header">
        <h3>About me</h3>
        <img src={photo} alt="me" />
        <p>
          Lorem Ipsum adalah contoh teks atau dummy dalam industri percetakan
          dan penataan huruf atau typesetting. Lorem Ipsum telah menjadi standar
          contoh teks sejak tahun 1500an, saat seorang tukang cetak yang tidak
          dikenal mengambil sebuah kumpulan teks dan mengacaknya untuk menjadi
          sebuah buku contoh huruf. Ia tidak hanya bertahan selama 5 abad, tapi
          juga telah beralih ke penataan huruf elektronik, tanpa ada perubahan
          apapun. Ia mulai dipopulerkan pada tahun 1960 dengan diluncurkannya
          lembaran-lembaran Letraset yang menggunakan kalimat-kalimat dari Lorem
          Ipsum, dan seiring munculnya perangkat lunak Desktop Publishing
          seperti Aldus PageMaker juga memiliki versi Lorem Ipsum.
        </p>
      </div>
    </>
  );
}

export default About;
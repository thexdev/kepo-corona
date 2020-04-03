import React, { memo } from "react";
import Layout from "components/layout";

const About = () => {
  return (
    <Layout>
      <section>
        <h2 className="text-center text-color-orange text-capitalize mb-4">
          kepo corona
        </h2>
        <p>
          Kepo corona adalah website untuk melihat info perkembangan penyakit
          corona baik di Indonesia maupun luar negeri. Tujuan dari website ini
          adalah untuk mengedukasi setiap orang tentang perkembangan penyakit
          ini.
        </p>
        <p>
          Website ini bersifat open source yang artinya teman-teman bisa
          menggunakan source code-Nya dengan bebas. Teman-teman bisa clone atau
          download repository website ini dari{" "}
          <a href="https://github.com/thexdev/kepo-corona">github</a>.
        </p>
      </section>

      <section>
        <h2 className="text-center text-color-orange text-capitalize mb-4">
          Covid-19
        </h2>
        <p>
          Penyakit koronavirus 2019 (bahasa Inggris: coronavirus disease 2019,
          disingkat COVID-19) adalah penyakit menular yang disebabkan oleh
          SARS-CoV-2, salah satu jenis koronavirus. Penyakit ini mengakibatkan
          pandemi koronavirus 2019–2020. Penderita COVID-19 dapat mengalami
          demam, batuk kering, dan kesulitan bernapas. Sakit tenggorokan, pilek,
          atau bersin-bersin lebih jarang ditemukan. Pada penderita yang paling
          rentan, penyakit ini dapat berujung pada pneumonia dan kegagalan
          multiorgan.
        </p>
        <p>
          Infeksi menyebar dari satu orang ke orang lain melalui percikan
          (droplet) dari saluran pernapasan yang sering dihasilkan saat batuk
          atau bersin. Waktu dari paparan virus hingga timbulnya gejala klinis
          berkisar antara 1–14 hari dengan rata-rata 5 hari. Metode standar
          diagnosis adalah uji reaksi berantai polimerase transkripsi-balik
          (rRT-PCR) dari usap nasofaring atau sampel dahak dengan hasil dalam
          beberapa jam hingga 2 hari. Pemeriksaan antibodi dari sampel serum
          darah juga dapat digunakan dengan hasil dalam beberapa hari. Infeksi
          juga dapat didiagnosis dari kombinasi gejala, faktor risiko, dan
          pemindaian tomografi terkomputasi pada dada yang menunjukkan gejala
          pneumonia.
        </p>
        <p>
          Mencuci tangan, menjaga jarak dari orang yang batuk, dan tidak
          menyentuh wajah dengan tangan yang tidak bersih adalah langkah yang
          disarankan untuk mencegah penyakit ini. Disarankan untuk menutup
          hidung dan mulut dengan tisu atau siku yang tertekuk ketika batuk.
          Organisasi Kesehatan Dunia (WHO) dan Pusat Pengendalian dan Pencegahan
          Penyakit AS (CDC) merekomendasikan kepada orang-orang yang menduga
          bahwa mereka telah terinfeksi untuk memakai masker bedah dan mencari
          nasihat medis dengan memanggil dokter dan tidak langsung mengunjungi
          klinik. Masker juga direkomendasikan bagi mereka yang merawat
          seseorang yang diduga terinfeksi tetapi tidak untuk digunakan
          masyarakat umum. Belum ada vaksin atau obat antivirus khusus untuk
          COVID-19; tata laksana yang diberikan meliputi pengobatan terhadap
          gejala, perawatan suportif, dan tindakan eksperimental. Angka
          fatalitas kasus diperkirakan antara 1–3%.
        </p>
        <blockquote>
          wikipedia -{" "}
          <a href="https://id.wikipedia.org/wiki/Penyakit_koronavirus_2019">
            Covid-19
          </a>
        </blockquote>
      </section>

      <section>
        <h2 className="text-center text-color-orange text-capitalize mb-4">
          sumber data
        </h2>
        <ul>
          <li>
            <a href="https://kawalcorona.com/">Kawal corona</a>
          </li>
        </ul>
      </section>
    </Layout>
  );
};

export default memo(About);

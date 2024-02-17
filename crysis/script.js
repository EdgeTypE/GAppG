
document.addEventListener('DOMContentLoaded', function () {
    // Data for timeline elements
    // const timelineData = [
    //     {description: 'Sefler, M33 galaksisinin yarısını kaplayacak şekilde Overhive Hyperion adı verilen devasa bir koloni inşa etti. Bu koloni diğer galaksilere yayılmaları için bir fırlatma üssü olacaktı.', date: 'Bir Milyar Yıl Önce' },
    //     {title: "Crysis", description: 'Sefler, M33 galaksisindeki tüm gezegenleri ele geçirdi ve tohum gemileri üretmeye başladı. Bu gemilerle diğer galaksilere giderek yeni koloniler kurmaya başladılar.', date: 'YARIM MİLYAR YIL ÖNCE' },
    //     {description: 'Seflere ait birkaç uzay gemisi Güneş Sistemi’ne vardı. Bir tohum gemisi Dünya’ya iniş yaptı, bir gemi Jüpiter’in uydularından birine indi ve bir gemi Mars yörüngesinde durdu. <br> Dünyaya iniş yapan Sef Tohum Gemisi, dünyadaki yaşamı incelemeye başladı. Gemi belirli zaman aralıklarında uyanıp çevresindeki doğal yaşamı inceledi ve topladığı verileri M33 Galaksisi’ndeki Overhive Hyperion’a göndermeye başladı. Bir bölgede yeterince veri topladıktan sonra gezegenin farklı yerlerine gitti ve böylece tüm gezegeni dolaştı.', date: '65 MİLYON YIL ÖNCE' },
    //     { "date": "2 MİLYON YIL ÖNCE", "description": "Sef Tohum Gemisi, Lingshan Adası’na ulaştı ve kendini bir dağ şeklinde gizledi." },
    //     { "date": "BİNLERCE YIL ÖNCE", "description": "Sefler, Jüpiter’in uydularına insanlığı gözlemlemek için bazı yapılar kurmaya başladı. Bu yapıların arasında Dünya’ya açılan bir portal da bulunuyordu." },
    //     { "date": "30 Haziran 1908", "description": "Rusya’nın Sibirya bölgesindeki Tunguska Irmağı’nın yakınlarında sabah saatlerinde bir patlama meydana geldi. Patlamada 80 milyon ağaç yok oldu, 2150 kilometre kare alan dümdüz oldu. Patlamanın kıvılcımları 800 km öteden bile görülebildi." },
    //     { "date": "1919", "description": "Bir grup bilim insanından oluşan bir ekip Tunguska bölgesine inceleme yapmaya gitti. Karl Rasch, Jacob Hargreave ve Walter Gould dışında tüm araştırmacılar hayatını kaybetti. Kalan araştırmacılar, elde ettikleri bilgilerle “Hargreave-Rasch Biyokimyasal”ı kurdu. İlerleyen zamanlarda Hargreave-Rasch Biyokimyasal’a bir paravan şirket olarak CryNet Systems kuruldu." },
    //     { "date": "1952", "description": "Jacob Hargreave, Yılın İnsanı seçildi." },
    //     { "date": "2008", "description": "Yeni Kuzey Kore lideri Kim Jong-chul, ülkesini yaptığı reformlarla süper güç haline getirmek için çalışmalara başladı." },
    //     { "date": "2016", "description": "Jake Dunn, Sean O’Neill ve Michael Sykes, Raptor Ekibi’ne katılmak üzere özel bir eğitim programına alındı." },
    //     { "date": "2018", "description": "Amerika, Excalibur Projesi’ni geliştirmek için CryNet’i görevlendirdi. Projenin amacı, dünyanın yörüngesinde dolaşan silahlar üretmekti." },
    //     { "date": "2019", "description": "Amerika Birleşik Devletleri, Güney Amerika’daki suç örgütleri ve çeteleri durdurmak için operasyonlara başladı. CIA’ye bağlı Laurence Barnes ve ekibi Kolombiya’daki bir köyde tespit edilen bir anomaliyi araştırmakla görevlendirildi. Araştırma sonunda Jacob Hargreave ve Karl Rasch’ın Tunguska’da bulduğuna benzer yapılar tespit edildi. Anomalinin çevresinde yaşayan insanlar, akıl sağlıklarını kaybetmişti ve Laurence Barnes’ı ilahi bir gücün elçisi sanmaya başlamışlardı. Dominic Lockhart, operasyon gizliliğini sağlamak için araştırma yapılan köyü, bir akıllı bomba yardımıyla tamamen yok etti. Laurance Barnes, araştırma sırasında gördüklerinden dolayı Jacop Hargreave tarafından izlenmeye başladı." },
    //     { "date": "7 Ağustos 2020", "description": "Kuzey Kore, Pasifik Okyanusu’ndaki şiddetli fırtınalar ve depremleri gerekçe göstererek, Lingshan Adası’ndaki sivilleri zorla tahliye etmeye başladı. Kuzey Kore, bu tahliyenin bir insani yardım süreci olduğunu iddia etti. Amerika’nın adada bulunan araştırma ekibi ile iletişimi kesildi." },
    //     { "date": "12 Ağustos 2020", "description": "Amerika’nın araştırma ekibine ait bir gemi, yardım çağrısı yolladı." },
    //     { "date": "14 Ağustos 2020", "description": "Amerika, Kuzey Kore’nin ele geçirdiği Lingshan Adası’nı kontrol altına almak ve araştırma ekibini kurtarmak için gizli bir operasyon başlattı. Operasyona 5 nanogiysili askerden oluşan Raptor Ekibi öncülük ediyordu. İlk başta basit bir rehine kurtarma operasyonu olarak başlayan harekat, Dünya’nın kaderini sonsuza kadar değiştirecekti." }

    // ];


    fetch('https://raw.githubusercontent.com/EdgeTypE/GAppG/main/crysis/data.json')
        .then(response => response.json())
        .then(data => {
            timelineData = data;
            renderTimeline();
        });

    // Function to create a timeline element
    function createTimelineElement(data) {
        const li = document.createElement('li');
        const directionClass = (data.position === 'right') ? 'direction-r' : 'direction-l';
        li.innerHTML = `
            <div class="${directionClass}">
                <div class="flag-wrapper">
                    <span class="hexa"></span>
                    <span class="time-wrapper"><span class="time">${data.date}</span></span>
                </div>
                <div class="desc">${data.description}</div>
                ${data.image ? `<img src="${data.image}" alt="image" style="width: 100%; height: auto; margin-top: 10px; border-radius: 5%;">` : ''}
            </div>
        `;
        return li;
    }

    // Function to add timeline elements to the page
    function renderTimeline() {
        const timeline = document.getElementById('timeline');
        timelineData.forEach((item, index) => {
            const position = index % 2 === 0 ? 'right' : 'left';
            const timelineElement = createTimelineElement({ ...item, position });
            timeline.appendChild(timelineElement);
        });
    }

    // Render the timeline when the page is loaded
    renderTimeline();
});

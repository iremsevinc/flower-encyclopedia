//71 ÇİÇEK VERİTABANI 
const cicekler = [
    // --- MANEVİ GRUP (41 Çiçek) ---
    { 
        ad: "Kırmızı Gül", tur: "manevi", resim: "img/gul.jpg", 
        manevi: "Tutku, aşk ve romantizm.", sifali: "Cildi canlandırır.",
        popup_baslik_manevi: "Aşkın, Tutkunun ve Zarafetin Dili",
        popup_detay_manevi: "Gül, yüzyıllardır aşkı ve romantizmi temsil eden evrensel bir semboldür. Özellikle evlilik teklifleri, yıldönümleri gibi romantik anlarda derin duyguları ifade etmek için tercih edilir. Kırmızı gül, tutkulu aşkı; pembe gül, zarafeti ve hayranlığı; beyaz gül ise saflığı ve masumiyeti simgeler. Hediye edilen gülün rengi, gönderilen mesajın duygusal tonunu belirler.",
        popup_baslik_sifali: "Cilt Bakımında Gülün Çeşitli Kullanımları",
        popup_detay_sifali: "Gül bitkisi, geleneksel halk uygulamalarında cildi canlandırmak ve yatıştırmak amacıyla yaygın olarak kullanılır. Gül suyu, yapraklarının buharla damıtılmasıyla elde edilir ve doğal bir tonik görevi görür. Gül yağı (esansiyel yağ) ise masaj yoluyla kullanıldığında rahatlatıcı aromaterapik etkiler sunar. Taze gül yaprakları kurutularak çay veya banyo karışımlarına eklenebilir, bu kullanımlar genellikle cildin nem dengesini destekler."    
    },
    { 
        ad: "Lale", tur: "manevi", resim: "img/lale.jpg", 
        manevi: "Zarafet ve asalet.", sifali: "Nemlendirici.",
        popup_baslik_manevi: "Osmanlı İmparatorluğu'nun Zarafeti",
        popup_detay_manevi: "Lale, özellikle Osmanlı döneminde zarafetin, gücün ve asaletin en önemli simgesiydi. Sevgiliye lale vermek, ona duyulan derin hayranlığı ve mevki olarak yüksekliğini kabul etmek anlamına gelirdi. Günümüzde lale, kendine güvenen, şık ve güçlü karakterdeki kişilere iltifat etmek amacıyla sıkça tercih edilir.",
        popup_baslik_sifali: "Doğal Nem Desteği",
        popup_detay_sifali: "Lale yaprakları ve soğanları geleneksel olarak cildi nemlendirmek ve yumuşatmak için kullanılmıştır. Ezilip macun haline getirilen lale soğanının harici kullanımı cildi besler. Ancak lalenin şifalı kullanımı günümüzde popülerliğini yitirmiş ve daha çok kozmetik alanında içerik olarak yer almaktadır."
    },
    { 
        ad: "Orkide", tur: "manevi", resim: "img/orkide.jpg", 
        manevi: "Lüks ve nadir güzellik.", sifali: "Enerji verici.",
        popup_baslik_manevi: "Lüksün ve Nadir Güzelliğin İfadesi",
        popup_detay_manevi: "Orkide, ince işçiliği ve egzotik görünümü nedeniyle lüksü, ihtişamı ve nadir bulunan güzelliği temsil eder. Genellikle çok özel ve sofistike kişilere hediye edilir. Pembe orkide zarafeti, beyaz orkide ise saf sevgiyi ve saygıyı simgeler, bu nedenle annelere ve patronlara hediye edilirken renk seçimi önemlidir.",
        popup_baslik_sifali: "Geleneksel Enerji Kaynağı",
        popup_detay_sifali: "Bazı orkide türlerinin kökleri (salep) geleneksel Çin tıbbında enerji ve canlılık artırıcı olarak kullanılmıştır. Kurutulmuş kökler toz haline getirilip sıcak içeceklere karıştırılarak tüketilirdi. Günümüzde ise salep tüketimi, besin değeri nedeniyle popülerliğini korusa da, yabani orkidelerin korunması gerekmektedir."
    },
    { 
        ad: "Papatya", tur: "manevi", resim: "img/papatya.jpg", 
        manevi: "Masumiyet ve temiz kalp.", sifali: "Sinirleri yatıştırır.",
        popup_baslik_manevi: "Masumiyetin ve Başlangıçların Çiçeği",
        popup_detay_manevi: "Papatya, saf sevgiyi, masumiyeti ve temiz kalbi simgeler. Genellikle genç aşıklar, çocuklar ve yeni başlangıçlar yapan kişilere verilir. Papatya falı, bu çiçeğin 'seviyor/sevmiyor' ikilemiyle olan manevi bağını gösterir. En sadık dostlukların ve masum duyguların ifadesidir.",
        popup_baslik_sifali: "Sakinleştirici Papatya Çayı Reçetesi",
        popup_detay_sifali: "Bu çay, sinirleri yatıştırmak ve daha kaliteli uyku çekmek için akşamları tüketilir. Kurutulmuş papatyaları hava almayacak şekilde saklamak, etken maddelerinin korunmasını sağlar ve günümüzde en yaygın bilinen bitki çaylarından biridir."
    },
    { 
        ad: "Mine Çiçeği", tur: "manevi", resim: "img/mine.jpg", 
        manevi: "Aile birliği ve uyum.", sifali: "Yorgunluk giderici.",
        popup_baslik_manevi: "Aile Bağlarının Temsilcisi",
        popup_detay_manevi: "Mine çiçeği, özellikle aile ve ev içinde uyumu, birliği ve mutluluğu sembolize eder. Bu nedenle ev hediyesi olarak ya da aile üyelerine bağlılığı ifade etmek amacıyla verilir. Eski kültürlerde bazen büyüden ve kötü ruhlardan korunmak için de kullanılırdı, bu da manevi önemini artırır.",
        popup_baslik_sifali: "Hafif Anti-Stres Uygulaması",
        popup_detay_sifali: "Mine çiçeği, yorgunluk ve hafif stres durumlarında rahatlama sağlamak için kullanılır. Taze yaprakları ve çiçekleri ezilerek hazırlanan banyo suyuna eklenir. Günümüzde bu kullanımı pek yaygın olmasa da, geleneksel olarak bitkinin zihinsel açıklık sağladığına inanılırdı."
    },
    { 
        ad: "Lotus", tur: "manevi", resim: "img/lotus.jpg", 
        manevi: "Ruhsal aydınlanma.", sifali: "Rahatlatıcı etkisi vardır.",
        popup_baslik_manevi: "Aydınlanma ve Saflık Hikayesi",
        popup_detay_manevi: "Lotus, çamurlu sulardan yükselerek açması nedeniyle ruhsal arınmayı, saflığı ve aydınlanmayı temsil eder. Budizm ve Hinduizm'in en kutsal çiçeklerinden biridir. Bu çiçeği hediye etmek, bir kişinin ruhsal yolculuğuna ve temiz niyetlerine saygı duyulduğunu gösterir. Zorluklara rağmen temiz kalma arzusunu simgeler.",
        popup_baslik_sifali: "Geleneksel Sakinleştirici",
        popup_detay_sifali: "Lotusun tohumları ve yaprakları Asya geleneksel tıbbında sinirleri sakinleştirmek ve uykusuzluğa iyi gelmek için kullanılırdı. Kurutulmuş tohumlar çay olarak demlenerek tüketilirdi. Günümüzde bu bitkinin anti-enflamatuar özellikleri de modern araştırmacılar tarafından incelenmektedir."
    },
    { 
        ad: "Sümbül", tur: "manevi", resim: "img/sumbul.jpg", 
        manevi: "Bağlılık ve sonsuz sevgi.", sifali: "Güzel kokusu ferahlatır.",
        popup_baslik_manevi: "Sonsuz Sevginin ve Sadakatin Simgesi",
        popup_detay_manevi: "Sümbül, özellikle mitolojideki hüznü ve sonsuz bağlılığı temsil eder. Farklı renkleri farklı anlamlar taşır; mor sümbül üzüntüyü ve pişmanlığı, mavi sümbül ise samimiyeti ve bağlılığı ifade eder. Derin duygusal bağ kurduğunuz birine ya da uzun süreli ilişkinizi kutlamak için verilir.",
        popup_baslik_sifali: "Aromaterapik Ferahlık",
        popup_detay_sifali: "Sümbülün yoğun, tatlı kokusu aromaterapide ferahlatıcı ve ruh halini iyileştirici olarak kullanılır. Sümbül yağı, difüzöre damlatılarak ya da masaj yağına karıştırılarak kullanılır. Hoş kokusu sayesinde sinir sistemi üzerinde hafif rahatlatıcı bir etkisi vardır."
    },
    { 
        ad: "Karanfil", tur: "manevi", resim: "img/karanfil.jpg", 
        manevi: "Sadakat ve özlem.", sifali: "Diş ağrısına iyi gelir.",
        popup_baslik_manevi: "Saygı ve Sadakatin Çiçeği",
        popup_detay_manevi: "Karanfil, rengine göre farklı anlamlar taşır. Kırmızı karanfil derin bir hayranlık, beyaz karanfil saf sevgi ve şans, pembe karanfil ise 'seni asla unutmayacağım' mesajını taşır. Anneler Günü'nün simgesi olarak da kabul edilir ve sadakati güçlü bir şekilde temsil eder.",
        popup_baslik_sifali: "Diş Ağrısı İçin Doğal Çözüm",
        popup_detay_sifali: "Karanfilin tomurcukları ve yağı, içerdiği **öjenol** sayesinde güçlü bir doğal antiseptik ve ağrı kesicidir. Bir karanfil tanesi çiğnenerek ya da karanfil yağı pamuğa damlatılarak ağrıyan diş üzerine kısa süreli uygulanabilir. Yağ, küçük ve koyu renkli cam şişelerde, serin bir yerde saklanmalıdır."
    },
    { 
        ad: "Menekşe", tur: "manevi", resim: "img/menekse.jpg", 
        manevi: "Tevazu ve alçakgönüllülük.", sifali: "Öksürüğe iyi gelir.",
        popup_baslik_manevi: "Tevazu",
        popup_detay_manevi: "Küçük yapısı ve alçakgönüllü duruşu nedeniyle menekşe, tevazu, alçakgönüllülük anlamlarını taşır. Utangaç bir hayranlık duyan kişiler tarafından tercih edilir. Hediye olarak vermek, kişinin sadeliğine ve iç güzelliğine dikkat çektiğinizi gösterir.",
        popup_baslik_sifali: "Göğsü Yumuşatan Şurup",
        popup_detay_sifali: "Menekşe yaprakları ve çiçekleri, göğsü yumuşatan ve öksürüğe iyi gelen doğal şurup yapımında kullanılır. Taze çiçekler kaynatılıp bal ile tatlandırılarak tüketilmelidir. Menekşenin bu şifalı kullanımı, modern tıbbın yaygınlaşmasından önce halk arasında oldukça popülerdi."
    },
    { 
        ad: "Manolya", tur: "manevi", resim: "img/manolya.jpg", 
        manevi: "Sebat ve asalet.", sifali: "Kaygı gidericidir.",
        popup_baslik_manevi: "Asaletin ve Dayanıklılığın Duruşu",
        popup_detay_manevi: "Manolya, özellikle beyaz manolya, asaleti, ihtişamı ve saflığı temsil eder. Kalın yaprakları ve büyük, zarif çiçekleri nedeniyle sebatkarlığı ve dayanıklılığı da simgeler. Olgunluğa ve saygıdeğerliğe ulaşmış kişilere verilen anlamlı bir hediyedir.",
        popup_baslik_sifali: "Sakinleştirici Gelenek",
        popup_detay_sifali: "Manolya ağacının kabuğu, özellikle Çin tıbbında kaygıyı ve hafif depresyon belirtilerini gidermek için kullanılmıştır. Kabuk kurutulup toz haline getirilir ve çay olarak demlenir. Bu doğal sakinleştirici günümüzde de sınırlı sayıda ekstre formunda kullanılmaktadır."
    },
    { 
        ad: "Ortanca", tur: "manevi", resim: "img/ortanca.jpg", 
        manevi: "Samimiyet ve şükran.", sifali: "Kökleri şifalıdır.",
        popup_baslik_manevi: "Şükran ve Samimi Bağlılık",
        popup_detay_manevi: "Ortanca, büyük ve gösterişli çiçek demetleri ile samimi duyguları ve minnettarlığı ifade etmek için kullanılır. Teşekkür etmek ya da bir iyiliğe karşılık vermek istendiğinde ideal bir tercihtir. Rengi toprağın pH'ına göre değiştiği için, duyguların değişkenliğini de simgeleyebilir.",
        popup_baslik_sifali: "Böbrek Sağlığı Destekçisi",
        popup_detay_sifali: "Ortanca kökleri, geleneksel olarak idrar söktürücü ve böbrek taşı tedavisini destekleyici olarak kullanılmıştır. Kökler kurutulup kaynatılarak elde edilen öz, dikkatli dozlarda tüketilirdi. Kullanımı günümüzde uzman gözetimi gerektirir, çünkü yüksek miktarlar istenmeyen etkilere neden olabilir."
    },
    { 
        ad: "Leylak", tur: "manevi", resim: "img/leylak.jpg", 
        manevi: "Güzellik ve geçiş dönemleri.", sifali: "Ateş düşürücü.",
        popup_baslik_manevi: "Baharın Habercisi ve Huzurun Sembolü",
        popup_detay_manevi: "Leylak, özellikle rengi ve yoğun, güzel kokusuyla tanınır; bu, onu baharın gelişinin ve yeniden uyanışın en belirgin habercisi yapar. Gençlik dönemini ve yaşamdaki yeni, taze başlangıçları simgeler. Mor leylak genel güzelliği ve duygusal derinliği, beyaz leylak ise masumiyet ve saflığı ifade eder. Leylak, aynı zamanda huzurlu bir ortamı ve dinginliği çağrıştırır.",
        popup_baslik_sifali: "Doğal Ateş Düşürücü ve Hafif Ağrı Kesici Gelenek",
        popup_detay_sifali: "Leylak çiçekleri ve kabukları, geleneksel halk tıbbında hafif ateş düşürücü ve ağrı kesici özelliklere sahip olduğu için kullanılmıştır. Yaprakları kaynatılarak elde edilen çay, özellikle hafif ateşli soğuk algınlığı durumlarında destekleyici olarak tüketilirdi. Ancak bu kullanım modern tıpta nadirdir ve bitkinin doğru hazırlanışına dikkat edilmelidir.",
    },
    { 
        ad: "Kardelen", tur: "manevi", resim: "img/kardelen.jpg", 
        manevi: "Zorluklara direnç.", sifali: "Hafıza sorunları.",
        popup_baslik_manevi: "Zorluklara Meydan Okuma",
        popup_detay_manevi: "Karın altından fışkırarak kışın zorlu koşullarına direnmesi nedeniyle kardelen, umudu, azmi ve zorluklara karşı duruşu simgeler. Birine kardelen vermek, onun gücüne ve direnme yeteneğine duyduğunuz hayranlığı gösterir. Yeniden doğuşun ve yeni başlangıçların da simgesidir.",
        popup_baslik_sifali: "Hafızaya Destek",
        popup_detay_sifali: "Kardelenin bazı türleri, özellikle içerdiği galantamin bileşiği nedeniyle hafıza ve bilişsel fonksiyonları destekleyici olarak bilimsel araştırmalara konu olmuştur. Bu bileşen, günümüzde Alzheimer tedavisinde kullanılan bazı ilaçların yapımında temel teşkil eder. Evde gelişi güzel tüketimi kesinlikle önerilmez ve profesyonel gözetim gerektirir."
    },
    { 
        ad: "Kamelya", tur: "manevi", resim: "img/kamelya.jpg", 
        manevi: "Kusursuzluk.", sifali: "Cilt bakım yağı.",
        popup_baslik_manevi: "Mükemmelliğin Sembolü",
        popup_detay_manevi: "Kamelya, özellikle Doğu kültürlerinde kusursuzluğu, mükemmelliği ve uzun ömürlülüğü temsil eder. Beyaz kamelya saf sevgiyi, kırmızı kamelya ise tutkuyu simgeler. Hediyelerde zarafeti ve üstün niteliği vurgulamak için tercih edilir.",
        popup_baslik_sifali: "Geleneksel Cilt Bakım Sırrı",
        popup_detay_sifali: "Kamelya tohumlarından elde edilen yağ, Asya'da yüzyıllardır cilt ve saç bakımı için kullanılmaktadır. Bu yağ, cildi derinlemesine nemlendirir ve antioksidanlar açısından zengindir. En etkili kullanım şekli, yağı kuru ve serin yerde saklayarak gece nemlendiricisi olarak masaj yoluyla uygulamaktır."
    },
    { 
        ad: "İris (Süsen)", tur: "manevi", resim: "img/iris.jpg", 
        manevi: "Bilgelik ve cesaret.", sifali: "Karaciğer dostudur.",
        popup_baslik_manevi: "Bilgeliğin ve İnancın Elçisi",
        popup_detay_manevi: "İris çiçeği, adını mitolojideki gökkuşağı tanrıçasından alır ve bilgelik, cesaret ve inanç anlamlarını taşır. Mavi İris, inancı ve umudu; mor İris ise bilgeliği simgeler. Bir kişiye destek vermek ve onun bilgeliğine güvendiğinizi göstermek için ideal bir çiçektir.",
        popup_baslik_sifali: "Karaciğer Detoksu Desteği",
        popup_detay_sifali: "İris kökü (Orris kökü), geleneksel olarak sindirim sistemini düzenlemek ve karaciğer fonksiyonlarını desteklemek için kullanılmıştır. Kök, kurutulup toz haline getirildikten sonra düşük dozlarda tüketilirdi. Yoğun tadı nedeniyle günümüzde daha çok parfüm ve likör yapımında aroma verici olarak tanınmaktadır."
    },
    { 
        ad: "Ayçiçeği", tur: "manevi", resim: "img/aycicegi.jpg", 
        manevi: "Hayranlık ve neşe.", sifali: "E vitamini deposudur.",
        popup_baslik_manevi: "Neşe ve Uzun Ömür",
        popup_detay_manevi: "Güneşi takip etme eğilimi nedeniyle ayçiçeği, hayranlığı, neşeyi, uzun ömrü ve bağlılığı simgeler. Hayata pozitif bakmanın ve umudun güçlü bir sembolüdür.",
        popup_baslik_sifali: "E Vitamini ve Kalp Sağlığı",
        popup_detay_sifali: "Ayçiçeği tohumları, güçlü bir E vitamin kaynağıdır ve kalp sağlığını destekleyen doymamış yağ asitleri içerir. Tohumlar kavrulmuş veya çiğ olarak tüketilebilir, ancak aşırıya kaçmamak gerekir çünkü kalorisi yüksektir. Yağı, günümüzde en yaygın kullanılan yemeklik yağlardan biri olmaya devam etmektedir."
    },
    { 
        ad: "Gelincik", tur: "manevi", resim: "img/gelincik.jpg", 
        manevi: "Hüzün ve anılar.", sifali: "Şurubu sakinleştirir.",
        popup_baslik_manevi: "Anılar ve Kısa Ömürlü Güzellik",
        popup_detay_manevi: "Gelincik, kısa ömürlü ve narin yapısı nedeniyle huzuru, unutulmuşluğu ve derin anıları simgeler. Özellikle kaybedilen birinin anısına saygı göstermek amacıyla kullanılır. Hüzünlü bir güzelliği temsil eder ve kederli duyguların ifadesidir.",
        popup_baslik_sifali: "Doğal Uyku Desteği",
        popup_detay_sifali: "Gelincik yapraklarından elde edilen şurup, hafif sedatif (sakinleştirici) özelliklere sahiptir ve geleneksel olarak uykuya dalmaya yardımcı olmak için kullanılmıştır. Şurubu hazırlamak için taze yapraklar kaynatılıp bal ile tatlandırılarak tüketilmelidir. Ancak, güçlü sakinleştirici etkileri nedeniyle bilinçsizce kullanımı önerilmez."
    },
    { 
        ad: "Nergis", tur: "manevi", resim: "img/nergis.jpg", 
        manevi: "Saygı ve sevgi.", sifali: "Temizleyici etki.",
        popup_baslik_manevi: "Yenilenme ve Tek Taraflı Aşk",
        popup_detay_manevi: "Nergis, baharın ilk habercisi olarak kabul edilir ve yeni başlangıçları, saygıyı ve sevgi dolu duyguları simgeler. Ancak mitolojideki Narkissos hikayesi nedeniyle bazen kendini beğenmişliği de çağrıştırabilir.",
        popup_baslik_sifali: "Vücudu Temizleme Potansiyeli",
        popup_detay_sifali: "Nergis soğanları, geleneksel tıpta kusturucu ve temizleyici etkileri nedeniyle kullanılmıştır. Ancak, nergis soğanları zehirli alkaloidler içerir ve içsel tüketimi ciddi sağlık sorunlarına yol açabilir. Bu nedenle günümüzde tıbbi amaçla kullanımı kesinlikle yoktur."
    },
    { 
        ad: "Begonvil", tur: "manevi", resim: "img/begonvil.jpg", 
        manevi: "Akdeniz ruhu.", sifali: "Boğazı yumuşatır.",
        popup_baslik_manevi: "Akdeniz'in Canlı Ruhu",
        popup_detay_manevi: "Begonvil, sıcak iklimleri, canlılığı ve neşeyi çağrıştırır. Akdeniz ruhunu, tatili ve huzurlu, telaşsız yaşamı simgeler. Bu nedenle gezmeyi seven, hayat dolu kişilere hediye olarak idealdir. Dayanıklılığı sayesinde, güçlü karakterleri de temsil eder.",
        popup_baslik_sifali: "Boğaz Rahatlatıcı",
        popup_detay_sifali: "Begonvilin yaprakları geleneksel olarak demlenerek soğuk algınlığı ve öksürüğe bağlı boğaz ağrısını hafifletmek için kullanılmıştır. Çayının, boğazı yumuşattığı ve öksürüğü hafiflettiği söylenir. Kurutulmuş yaprakları çay yapmak için uzun süre saklanabilir."
    },
    { 
        ad: "Kasımpatı", tur: "manevi", resim: "img/kasimpati.jpg", 
        manevi: "Ölümsüzlük.", sifali: "Baş ağrısına iyi gelir.",
        popup_baslik_manevi: "Uzun Ömür ve Ölümsüzlük",
        popup_detay_manevi: "Kasımpatı (Krizantem), Asya kültürlerinde uzun ömür, mutluluk ve ölümsüzlüğü simgeler. Japonya'nın imparatorluk mührü olması, ona asalet ve güç anlamı katar. Sarı kasımpatı ihmali, beyaz kasımpatı ise sadakati temsil eder.",
        popup_baslik_sifali: "Gerginlik Giderici Çay",
        popup_detay_sifali: "Kasımpatı çiçekleri, Çin tıbbında baş ağrısını hafifletmek ve göz yorgunluğunu gidermek için çay olarak demlenir. Kurutulmuş çiçekleri sıcak suya eklenerek tüketilir. Düzenli tüketimi, genel rahatlama ve hafifletici etkiler sunar."
    },
    { 
        ad: "Gardenya", tur: "manevi", resim: "img/gardenya.jpg", 
        manevi: "Zarafet, asalet ve neşe.", sifali: "İltihap giderir.",
        popup_baslik_manevi: "Eşsiz Zarafet ve Estetik Denge",
        popup_detay_manevi: "Gardenya, büyük, kremsi beyaz çiçekleri ve yoğun, tatlı kokusuyla üstün zarafeti, inceliği ve asil bir duruşu temsil eder. Genellikle sofistike ve kendine has güzelliği olan kişilere iltifat etmek amacıyla hediye edilir. Aynı zamanda ruhsal berraklığı ve derin bir iç huzuru simgeler. Ortama neşe ve sakinlik kattığına inanılır.",
        popup_baslik_sifali: "Geleneksel İltihap ve Rahatsızlık Giderici",
        popup_detay_sifali: "Gardenya meyvesi (özellikle Çin tıbbında) geleneksel olarak iltihap azaltıcı özelliklerinden dolayı kullanılmıştır. Kurutulmuş meyveleri çay olarak demlenir veya farklı bitkisel karışımlara ekstre formunda dahil edilirdi. Bu tür kullanımlar modern tıbbi destek için değildir ve geleneksel bir uygulama olarak bilinir.",
    },
    { 
        ad: "Sardunya", tur: "manevi", resim: "img/sardunya.jpg", 
        manevi: "Dostluk.", sifali: "Cilt bakımı.",
        popup_baslik_manevi: " Dostluğun ve Yoldaşlığın Çiçeği",
        popup_detay_manevi: "Sardunya, pozitifliği, dostluğu ve samimi bağlılığı simgeler. Evlerin ve balkonların vazgeçilmezi olması, onu rahatlık ve yoldaşlık duygularıyla ilişkilendirir. Samimi arkadaşlıklara ve komşuluk ilişkilerine verilen değeri göstermek için tercih edilir.",
        popup_baslik_sifali: "Sardunya Yağı ile Cilt Bakımı",
        popup_detay_sifali: "Sardunya yapraklarından damıtılan uçucu yağ, ciltteki dengeleyici ve tonikleyici etkileri nedeniyle aromaterapide popülerdir. Yağ, bir taşıyıcı yağ ile seyreltilip cilde masaj yoluyla uygulanır. Bu yağın ayrıca stres azaltıcı ve duygusal dengeleyici etkileri olduğu da bilinmektedir."
    },
    { 
        ad: "Hercai Menekşe", tur: "manevi", resim: "img/hercaimenekse.jpg", 
        manevi: "Hatıralar.", sifali: "Egzama tedavisi.",
        popup_baslik_manevi: "Düşünce ve Hatıraların Derinliği",
        popup_detay_manevi: "Hercai Menekşe, isminin aksine 'düşünce' anlamına gelir. Sevdiklerinizle ilgili güzel hatıraları, özlemi ve derin düşünceyi simgeler. Birine hercai menekşe vermek, 'Seni düşünüyorum' veya 'Aklımdasın' demenin zarif bir yoludur. Genellikle yaşlılara ve uzun süredir görmediğiniz kişilere verilir.",
        popup_baslik_sifali: "Cilt Sorunlarına Doğal Destek",
        popup_detay_sifali: "Hercai menekşenin toprak üstü kısımları, geleneksel olarak egzamayı, akneyi ve diğer cilt sorunlarını hafifletmek için kullanılmıştır. Bitki kurutulup çay olarak demlenebilir veya kompres olarak cilde uygulanabilir. Harici uygulaması, günümüzde de sınırlı sayıda bitkisel üründe kullanılmaktadır."
    },
    { 
        ad: "Kiraz Çiçeği", tur: "manevi", resim: "img/kirazcicegi.jpg", 
        manevi: "Hayatın güzelliği.", sifali: "Cilt beyazlatma.",
        popup_baslik_manevi: "Hayatın Geçiciliği ve Güzelliği (Wabi-Sabi)",
        popup_detay_manevi: "Japon kültüründe (Sakura), kiraz çiçeği hayatın kısa, ancak muhteşem güzelliğini ve geçiciliğini (Wabi-Sabi) temsil eder. Her yıl çiçeklerin açmasını kutlamak (Hanami), anı yaşamanın önemini vurgular. Hediye olarak vermek, yaşamın güzelliklerinin takdir edilmesi gerektiğini hatırlatır.",
        popup_baslik_sifali: "Kozmetik Kullanım",
        popup_detay_sifali: "Kiraz çiçeği özleri, yüksek antioksidan içeriği ve cilt tonunu eşitleme potansiyeli nedeniyle modern kozmetik endüstrisinde yaygın olarak kullanılır. Genellikle kremlerin ve losyonların içerisine eklenerek cilde harici olarak uygulanır. Tıbbi kullanımı olmamakla birlikte, ciltteki yaşlanma belirtilerini yavaşlatmaya yardımcı olduğu düşünülür."
    },
    { 
        ad: "Şakayık", tur: "manevi", resim: "img/sakayik.jpg", 
        manevi: "Mutlu evlilik.", sifali: "Kas krampları.",
        popup_baslik_manevi: "Mutlu Evlilik ve Zenginlik",
        popup_detay_manevi: "Şakayık, Çin'de 'çiçeklerin kraliçesi' olarak bilinir ve zenginliği, onuru, romantizmi ve özellikle mutlu bir evliliği simgeler. Düğünler ve evlilik yıldönümleri için ideal bir hediyedir. Cömertliği ve gösterişi seven kişilere verilebilir.",
        popup_baslik_sifali: "Kas Rahatlatıcı",
        popup_detay_sifali: "Şakayık kökü (özellikle beyaz şakayık), geleneksel Çin tıbbında kas kramplarını, adet ağrılarını ve hafif ağrıları dindirmek için kullanılmıştır. Kök, kurutulup kaynatılarak çay veya haşlanmış ekstre formunda tüketilirdi. Bu kullanımı günümüzde de Asya'da popülerliğini korumaktadır."
    },
    { 
        ad: "Zambak", tur: "manevi", resim: "img/zambak.jpg", 
        manevi: "Yeniden doğuş.", sifali: "Masaj yağı.",
        popup_baslik_manevi: "Saflık ve Yeniden Doğuş",
        popup_detay_manevi: "Zambak, saflığı, masumiyeti ve yeniden doğuşu simgeler. Hristiyanlıkta sıklıkla Meryem Ana ile ilişkilendirilir. Beyaz zambak, ruhun saflığını ve zarafeti temsil eder. Hayatta yeni bir sayfa açan veya yas tutan birine umut vermek için kullanılır.",
        popup_baslik_sifali: "Rahatlatıcı Masaj Yağı",
        popup_detay_sifali: "Zambak çiçeklerinden elde edilen esansiyel yağ, masaj yağı olarak kullanıldığında cildi yumuşatır ve hoş kokusu sayesinde rahatlama sağlar. Yağı, karanlık ve serin bir yerde saklayarak tazeliğini koruyabilirsiniz. İçsel tüketimi önerilmez, harici kullanımı güvenlidir."
    },
    { 
        ad: "Mimoza", tur: "manevi", resim: "img/mimoza.jpg", 
        manevi: "Hassasiyet.", sifali: "Sakinleştirici.",
        popup_baslik_manevi: "Duyarlılık ve Hassas Ruh",
        popup_detay_manevi: "Mimoza, dokunulduğunda yapraklarını kapatma özelliği nedeniyle hassasiyeti ve duyarlılığı simgeler. Narin ve düşünceli karakterdeki kişilere verilen anlamlı bir çiçektir.",
        popup_detay_sifali: "Mimoza çiçeği ve kabuğu geleneksel olarak hafif anksiyete ve uykusuzluk durumlarında sakinleştirici olarak kullanılmıştır. Kurutulmuş kabuk çay olarak demlenir ve uykuya geçişi kolaylaştırdığı düşünülür. Bu kullanımı, stres yönetiminde doğal bir destek arayanlar arasında günümüzde bilinmektedir."
    },
    { 
        ad: "Akasya", tur: "manevi", resim: "img/akasya.jpg", 
        manevi: "Dostluk ve içten bağlılık.", sifali: "Yara iyileştirici.",
        popup_baslik_manevi: "Gizli Hayranlık ve Kalıcı Dostluğun Simgesi",
        popup_detay_manevi: "Akasya, genellikle içten ve kalıcı duyguları, gerçek dostluğu ve manevi bağı temsil eder. Sarı akasya; bağlılığı ve birine duyulan gizli hayranlığı, beyaz akasya ise saf ve temiz bir ruhu ifade eder. Bu çiçek, özellikle uzun süreli arkadaşlıklarda ve derin bir saygı duyulan kişilere verilen hediyelerde tercih edilir.",
        popup_baslik_sifali: "Geleneksel Yara Bakımı ve Sindirim Desteği",
        popup_detay_sifali: "Akasya ağacının reçinesi ve kabuğu, geleneksel halk uygulamalarında yara iyileşmesini desteklemek ve hafif sindirim sorunlarını yatıştırmak amacıyla kullanılmıştır. Reçinesinden elde edilen sakız, mideyi rahatlatmak için tüketilirken, kabuk özleri haricen yara bakımı için kullanılırdı. Bu kullanımlar geleneksel bilgiler olup, modern tıbbi tedavi yerine geçmez.",
    },
    { 
        ad: "Frezya", tur: "manevi", resim: "img/frezya.jpg", 
        manevi: "Güven.", sifali: "Aromaterapi.",
        popup_baslik_manevi: "Güven ve Arkadaşlık",
        popup_detay_manevi: "Frezya, masumiyeti, düşünceliliği ve özellikle güveni temsil eder. Yoğun ve hoş kokusu, samimiyeti çağrıştırır. Arkadaşlık ilişkilerinde sadakati ve güveni pekiştirmek için ideal bir hediyedir. Zor bir dönemde destek olan kişiye verilmesi anlamlıdır.",
        popup_baslik_sifali: "Kokusuyla Ruh Hali Düzenleyici",
        popup_detay_sifali: "Frezya'nın tatlı ve narin kokusu aromaterapide duygusal dengeyi sağlamak ve hafif bir neşe hissi vermek için kullanılır. Frezya yağı buhurdanlıkta veya banyo suyunda kullanıldığında stresin azaltılmasına yardımcı olur. Tıbbi kullanımı olmamakla birlikte, psikolojik rahatlama sağladığı bilinir."
    },
    { 
        ad: "Şebboy", tur: "manevi", resim: "img/sebboy.jpg", 
        manevi: "Sevgi ve sadakat.", sifali: "Rahatlatıcı koku.",
        popup_baslik_manevi: "Güzellik ve Sonsuz Sevgi",
        popup_detay_manevi: "Şebboy, güzelliği, sadakati ve güçlü sevgi bağlarını simgeler. Çiçeği hediye etmek, birine olan hayranlığınızı ve onun güzelliğini takdir ettiğinizi gösterir. Genellikle kadınların zarafetini övmek için kullanılır.",
        popup_baslik_sifali: "Hoş Kokulu Rahatlama",
        popup_detay_sifali: "Şebboyun yoğun ve tatlı kokusu, geleneksel olarak ortamı ferahlatmak ve rahatlama sağlamak amacıyla kullanılmıştır. Kurutulmuş çiçekleri poşetlerde veya sıcak su içinde bekletilerek evin atmosferini değiştirir. Bu aromatik kullanım, günümüzde de popülerliğini korumaktadır."
    },
    { 
        ad: "Küpe Çiçeği", tur: "manevi", resim: "img/kupecicegi.jpg", 
        manevi: "Zarafet.", sifali: "Kan temizleyici.",
        popup_baslik_manevi: "Zarafetin ve İnceliğin İfadesi",
        popup_detay_manevi: "Küpe çiçeği, narin ve sallantılı yapısıyla zarafeti, inceliği ve estetiği temsil eder. Hediye olarak verildiğinde, alıcının zarif ve sofistike karakterine iltifat edilir. Özellikle sanatçı ruhlu veya detaylara önem veren kişilere verilir.",
        popup_baslik_sifali: "Geleneksel Kan Temizleyici",
        popup_detay_sifali: "Küpe çiçeğinin bazı türleri, geleneksel halk tıbbında kan temizleyici ve idrar söktürücü olarak kullanılmıştır. Bitki yaprakları kurutulup demlenerek çay halinde tüketilirdi. Ancak, tıbbi etkileri konusunda yeterli modern bilimsel kanıt olmadığı için dikkatli yaklaşılmalıdır."
    },
    { 
        ad: "Anemon", tur: "manevi", resim: "img/anemon.jpg", 
        manevi: "Beklenti.", sifali: "Eklem ağrıları.",
        popup_baslik_manevi: "Terk Edilme ve Beklenti",
        popup_detay_manevi: "Anemon (Rüzgar Gülü), mitolojik kökenleri nedeniyle terk edilmeyi, kaybolmuş umudu ve beklentiyi simgeler. Aynı zamanda kısa bir heyecanı ve yoğun bir duyguyu da temsil edebilir. Zorlu bir ilişkinin veya bekleyişin sembolü olarak görülür.",
        popup_baslik_sifali: "Eklem Ağrısı Giderici",
        popup_detay_sifali: "Anemon bitkisinin bazı özleri geleneksel olarak romatizma ve eklem ağrılarının tedavisinde harici olarak kullanılmıştır. Bitkinin güçlü bileşenleri nedeniyle içsel tüketimi zehirli olabilir. Bu nedenle harici kullanımı da dikkatli olmayı gerektirir."
    },
    { 
        ad: "Yıldız Çiçeği", tur: "manevi", resim: "img/yildizcicegi.jpg", 
        manevi: "Zarafet ve onur.", sifali: "Cilt bakımı.",
        popup_baslik_manevi: "Zarafet ve Onur",
        popup_detay_manevi: "Yıldız çiçeği (Dahlia), zarafeti, onuru ve içsel gücü temsil eder. Büyük ve karmaşık yapısı, hediye edildiği kişinin benzersiz ve dikkat çekici karakterine vurgu yapar. Bir başarıyı kutlamak veya kişinin değerini belirtmek için mükemmeldir.",
        popup_baslik_sifali: "Cildi Yatıştırma",
        popup_detay_sifali: "Yıldız çiçeği özleri, ciltteki nemi korumaya yardımcı olan doğal polisakkaritler içerir. Bu nedenle kozmetik ürünlerde cildi yatıştırmak ve yumuşatmak için kullanılır. Tıbbi kullanımı olmamakla birlikte, doğal bir yumuşatıcı olarak popülerdir."
    },
    { 
        ad: "Açelya", tur: "manevi", resim: "img/acelya.jpg", 
        manevi: "Ölçülülük.", sifali: "Hava temizler.",
        popup_baslik_manevi: "Ölçülülük ve Ev Hâkimi",
        popup_detay_manevi: "Açelya, Çin kültüründe 'evde olmanın sevinci'ni simgeler ve Batı'da ölçülülüğü, ihtiyatı temsil eder. Bu nedenle özellikle ev hanımlarına veya evini seven kişilere hediye edilir. Kırmızı açelya tutkuyu, pembe açelya ise dostluğu ifade eder.",
        popup_baslik_sifali: "Hava Kalitesini İyileştirme",
        popup_detay_sifali: "Açelya, NASA tarafından yapılan çalışmalarda formaldehit ve benzen gibi zararlı kimyasalları havadan temizleme potansiyeli olan bitkiler arasında gösterilmiştir. Bu, dolaylı yoldan sağlığı destekleyici bir şifalı etkidir. Bitkiyi içeride tutmak, hava kalitesine katkıda bulunur."
    },
    { 
        ad: "Begonya", tur: "manevi", resim: "img/begonya.jpg", 
        manevi: "Hayalperestlik.", sifali: "Boğaz ağrısı.",
        popup_baslik_manevi: "Düşüncelilik ve Hayal Gücü",
        popup_detay_manevi: "Begonya, derin düşünceliliği, hayalperestliği ve sanatsal ruhu simgeler. Bazı kültürlerde buketlerde 'dikkatli ol' uyarısı taşıdığı düşünülür. Genellikle yaratıcı ve hayal gücü yüksek kişilere iltifat etmek için verilir.",
        popup_baslik_sifali: "Boğazı Rahatlatan Çay",
        popup_detay_sifali: "Begonya yaprakları geleneksel olarak hafif boğaz ağrısı ve öksürük belirtilerini hafifletmek için kullanılmıştır. Yapraklar kurutulup demlenerek ılık bir çay olarak yavaşça içilirdi. Tadı ekşi olduğu için bal ile tatlandırılarak tüketilmesi önerilir."
    },
    { 
        ad: "Petunya", tur: "manevi", resim: "img/petunya.jpg", 
        manevi: "Umut.", sifali: "Sakinleştirici.",
        popup_baslik_manevi: "Umut ve Dayanıklılık",
        popup_detay_manevi: "Petunya, umudu, azmi ve yılmazlığı simgeler. Genellikle olumsuz bir durumdan sonra yeniden toparlanan ve güçlü duran kişilere ilham vermek amacıyla verilir. Renkleri neşeyi ve pozitifliği çağrıştırır.",
        popup_baslik_sifali: "Hafif Rahatlatıcı Etki",
        popup_detay_sifali: "Petunya çiçeğinin, geleneksel halk tıbbında hafif sakinleştirici ve sinirleri yatıştırıcı etkileri olduğu düşünülmüştür. Bitkinin özleri, harici uygulamalar veya çok düşük dozlarda çay olarak kullanılırdı. Günümüzde bu kullanımı pek yaygın değildir."
    },
    { 
        ad: "Gladyöl", tur: "manevi", resim: "img/gladyol.jpg", 
        manevi: "Güç.", sifali: "Yara iyileştirici.",
        popup_baslik_manevi: "Karakter Gücü ve Onur",
        popup_detay_manevi: "Gladyöl (Kılıç Çiçeği), adını Latince 'gladius' (kılıç) kelimesinden alır ve karakter gücünü, onuru ve dürüstlüğü simgeler. Olimpiyat sporcularına başarılarının ardından verilirdi. Cesaret ve ahlaki güç sahibi kişilere iltifat etmek için idealdir.",
        popup_baslik_sifali: "Geleneksel Yara Bakımı",
        popup_detay_sifali: "Gladyöl soğanları (bazı türleri), geleneksel olarak ezilerek yara ve çıbanların üzerine kompres olarak uygulanırdı. Bu uygulamanın ciltteki iyileşmeyi hızlandırdığı düşünülürdü. Ancak soğanlar toksik olabileceğinden, günümüzde bu uygulamadan uzak durulması önerilir."
    },
    { 
        ad: "Hazeran", tur: "manevi", resim: "img/hazerancicegi.jpg", 
        manevi: "Hafiflik.", sifali: "Böcek kovucu.",
        popup_baslik_manevi: "Hafiflik ve Neşe",
        popup_detay_manevi: "Hazeran (Delphinium), hafifliği, neşeyi ve açık kalpliliği simgeler. Genellikle samimi ve neşeli arkadaşlıklara vurgu yapmak için kullanılır. Uçuşan yapısı, hayatı fazla ciddiye almamanın güzelliğini temsil eder.",
        popup_baslik_sifali: "Doğal Böcek Savar",
        popup_detay_sifali: "Hazeran tohumlarından ve yapraklarından elde edilen özler, doğal bir böcek kovucu olarak geleneksel olarak kullanılmıştır. Bitki kurutulup yakılarak dumanı böcekleri uzaklaştırırdı. Bitkinin toksik içeriği nedeniyle içsel tüketimi tehlikelidir."
    },
    { 
        ad: "Zakkum", tur: "manevi", resim: "img/zakkum.jpg", 
        manevi: "Dikkat.", sifali: "Zehirlidir, kullanılmaz.",
        popup_baslik_manevi: "Güzelliğin Tehlikesi ve Dikkat",
        popup_detay_manevi: "Zakkum, olağanüstü güzelliğine rağmen zehirli olması nedeniyle dikkati, tehlikeli güzelliği ve aldatıcı cazibeyi simgeler. Birine zakkum vermek, 'Dikkatli olmalısın, bu güzel şey tehlikeli olabilir' mesajını taşıyabilir. Güney Akdeniz bölgelerinde güçlü dayanıklılığın sembolüdür.",
        popup_baslik_sifali: "KESİNLİKLE KULLANILMAZ: Yüksek Toksisite",
        popup_detay_sifali: "Zakkum, zehirli bileşikler (kardiyak glikozitler) içerir ve bitkinin herhangi bir kısmı (yaprak, çiçek, odun) içsel veya harici olarak kullanılmamalıdır. Geleneksel tıpta bile kullanımı çok nadir ve ölümcül risklidir. Bu çiçeğin şifalı bir reçetesi yoktur; yalnızca bahçecilikte süs bitkisi olarak kalmalıdır."
    },
    { 
        ad: "Çuha Çiçeği", tur: "manevi", resim: "img/cuhacicegi.jpg", 
        manevi: "Gençlik.", sifali: "Baş ağrısı.",
        popup_baslik_manevi: "Gençlik ve Canlılık",
        popup_detay_manevi: "Çuha çiçeği, gençliği, yenilenmeyi ve ilkbaharın tazeliğini simgeler. Aynı zamanda sabrı ve sükûneti de ifade edebilir. Genç kalmaya ve canlılığa önem veren kişilere hediye etmek için idealdir.",
        popup_baslik_sifali: "Hafif Ağrı Kesici Çay",
        popup_detay_sifali: "Çuha çiçeği kökü (Primula veris), geleneksel olarak hafif baş ağrısını ve sinirsel gerginliği gidermek için kullanılmıştır. Kökler kurutulup kaynatılarak çay formunda tüketilir. Günümüzde daha çok bahar yorgunluğunu atmak için doğal bir destek olarak bilinir."
    },
    { 
        ad: "Cennet Kuşu", tur: "manevi", resim: "img/cennetkusu.jpg", 
        manevi: "Özgürlük.", sifali: "Psikolojik destek.",
        popup_baslik_manevi: "Özgürlük ve Egzotik Güzellik",
        popup_detay_manevi: "Cennet Kuşu Çiçeği (Strelitzia), özgürlüğü, ihtişamı ve neşeyi simgeler. Uçan bir kuşa benzeyen yapısı, hayallere ve yeni maceralara atılma arzusunu temsil eder. Yaratıcı, gezgin ruhlu ve bağımsız kişilere ilham vermek için verilir.",
        popup_baslik_sifali: "Dolaylı Psikolojik Destek",
        popup_detay_sifali: "Cennet kuşu çiçeğinin doğrudan bir tıbbi kullanımı olmasa da, canlı renkleri ve egzotik formu, mekanlara enerji ve neşe katar. Çiçekleri izlemenin, ruh halini iyileştirme ve hafif depresif duyguları azaltma yoluyla dolaylı bir 'şifalı' etkisi olduğu düşünülür."
    },

    // --- ŞİFALI GRUP (30 Çiçek) ---
    { 
        ad: "Lavanta", tur: "sifali", resim: "img/lavanta.jpg", 
        manevi: "Huzur.", sifali: "Uyku ve stres.",
        popup_baslik_manevi: "Huzur ve Sessiz Saygı",
        popup_detay_manevi: "Lavanta, saflığı, sessizliği ve huzuru simgeler. Sıklıkla ruhu sakinleştirmek ve dinginlik sağlamak için kullanılır. Stresli veya gergin kişilere hediye etmek, onlara biraz rahatlama arzuladığınızı gösterir. Genellikle saygıdeğer hanımlara verilir.",
        popup_baslik_sifali: "Stres ve Uykusuzluk Reçetesi",
        popup_detay_sifali: "Kurutulmuş lavanta çiçeklerini bez bir torbaya koyarak yastığınızın altına yerleştirmek, uyku kalitenizi artırır. Lavanta yağı, bir difüzöre damlatılarak ya da masaj yağına karıştırılarak kullanılır. Küçük cam kaplarda hava almayacak şekilde saklayın."
    },
    { 
        ad: "Adaçayı", tur: "sifali", resim: "img/adacayi.jpg", 
        manevi: "Arınma.", sifali: "Boğaz enfeksiyonu.",
        popup_baslik_manevi: "Arınma ve Bilgelik",
        popup_detay_manevi: "Adaçayı, bilgelik, uzun ömür ve manevi arınmayı temsil eder. Kötü enerjileri temizlemek için yakılması (smudging), geleneksel bir manevi uygulamadır.",
        popup_baslik_sifali: "Gargara ile Boğaz Enfeksiyonu Tedavisi",
        popup_detay_sifali: "Boğaz enfeksiyonlarına ve iltihaba iyi gelir. Soğuk algınlığında sıcak çayı balla tatlandırılıp içilebilir. Bitkiyi kurutup hava almayan cam kavanozda, ışıktan uzakta saklamak gerekir; kullanımı günümüzde oldukça yaygındır."
    },
    { 
        ad: "Ekinezya", tur: "sifali", resim: "img/ekinezya.jpg", 
        manevi: "Güç.", sifali: "Bağışıklık güçlendirir.",
        popup_baslik_manevi: "Güç ve Dayanıklılık",
        popup_detay_manevi: "Ekinezya, doğal dayanıklılığı ve gücü temsil eder. Geleneksel olarak Kızılderililer tarafından kullanılması, ona köklü bir geçmiş ve bilgelik anlamı katar.",
        popup_baslik_sifali: "Kış Ayları İçin Bağışıklık Güçlendirici Reçete",
        popup_detay_sifali: "Ekinezya kökü ve çiçekleri, bağışıklık sistemini destekleyici en bilinen bitkilerden biridir. Kurutulmuş kök veya çiçeklerden yapılan çay, kış aylarında hastalıklardan korunmak için günde bir fincan tüketilir. Bitkiyi tentür (alkol çözeltisi) formunda kullanmak, etken maddeleri açısından daha etkili kabul edilir, ancak uzun süreli ve yüksek dozda kullanımı önerilmez."
    },
    { 
        ad: "Biberiye", tur: "sifali", resim: "img/biberiye.jpg", 
        manevi: "Zihin açıklığı.", sifali: "Hafıza ve kas ağrısı.",
        popup_baslik_manevi: "Hafıza ve Sadakat",
        popup_detay_manevi: "Biberiye, anıları, sadakati ve zihin açıklığını simgeler. Öğrenci veya sınav hazırlığındaki kişilere zihinsel berraklık dilemek amacıyla verilir. Geleneksel olarak düğünlerde sadakati temsil etmesi için gelin buketlerine eklenirdi.",
        popup_baslik_sifali: "Konsantrasyon ve Kas Gevşetici Yağ",
        popup_detay_sifali: "Biberiye yağı, içerdiği güçlü bileşikler sayesinde kan dolaşımını hızlandırarak zihinsel konsantrasyonu artırır. Birkaç damla yağı şakaklara masaj yoluyla uygulamak hafızayı destekler. Ayrıca demlenip ılık banyo suyuna eklenmesi, kas ağrılarını ve romatizmayı hafifletir. Taze dalları kurutulup kapalı bir yerde saklanmalıdır."
    },
    { 
        ad: "Ihlamur", tur: "sifali", resim: "img/ihlamur.jpg", 
        manevi: "Sıcaklık.", sifali: "Soğuk algınlığı.",
        popup_baslik_manevi: "Sıcaklık ve Yuva Hissi",
        popup_detay_manevi: "Ihlamur, sıcaklığı, dostluğu ve huzurlu bir yuva hissini simgeler. Yoğun kokusu rahatlatıcı ve davetkar bir atmosfer yaratır.",
        popup_baslik_sifali: "Klasik Soğuk Algınlığı Çayı",
        popup_detay_sifali: "Ihlamur çiçekleri, terletici ve balgam söktürücü özellikleri nedeniyle soğuk algınlığının en bilinen ilacıdır. Bir tutam kurutulmuş ıhlamuru 10 dakika demlendikten sonra limon ve bal ile sıcak olarak tüketmek boğazı rahatlatır ve ateşi düşürmeye yardımcı olur. Kurutulmuş çiçekleri hava almayan cam kaplarda saklayarak tazeliğini koruyun."
    },
    { 
        ad: "Aynısefa", tur: "sifali", resim: "img/aynisefa.jpg", 
        manevi: "Şifa.", sifali: "Cilt yaraları.",
        popup_baslik_manevi: "Neşe ve Canlılık",
        popup_detay_manevi: "Aynısefa (Kadife Çiçeği), güneşi takip etmesi nedeniyle sevinci, canlılığı ve zenginliği sembolize eder. Aynı zamanda 'mutluluk dolu bir gelecek' dileğini de taşır. Neşeli ve hayat dolu kişilere hediye edilir.",
        popup_baslik_sifali: "Cilt Yaraları ve İyileşme Kremi",
        popup_detay_sifali: "Aynısefa, anti-enflamatuar ve antiseptik özellikleri sayesinde ciltteki yaraları, kesikleri ve yanıkları iyileştirmede çok etkilidir. Taze çiçekleri zeytinyağında ısıtılarak elde edilen merhem (aynısefa kremi) harici olarak uygulanır. Günümüzde doğal cilt bakım ürünlerinin temel bileşenlerinden biridir ve kullanımı çok güvenlidir."
    },
    { 
        ad: "Karahindiba", tur: "sifali", resim: "img/karahindiba.jpg", 
        manevi: "Dilek.", sifali: "Karaciğer detoksu.",
        popup_baslik_manevi: "Dilek ve Dayanıklılık",
        popup_detay_manevi: "Karahindiba tohumlarını üfleyerek dilek tutmak, ona manevi bir önem katar. Aynı zamanda her yerde yetişebilmesi nedeniyle zorluklara karşı dayanıklılığı da simgeler. Umut ve dileklerin gerçekleşmesi için hediye edilebilir.",
        popup_baslik_sifali: "Karaciğer ve Safra Kesesi Destekçisi",
        popup_detay_sifali: "Karahindiba kökleri, karaciğer fonksiyonlarını desteklemek ve safra üretimini artırmak için kullanılır. Kurutulmuş ve kavrulmuş kökler, kahve ikamesi olarak tüketilebileceği gibi, yaprakları da salatalara eklenerek yenilebilir. Bitkiyi ilkbaharda taze olarak toplamak ve dikkatlice temizlemek önemlidir. En güçlü detoks etkisine sahip bitkilerden biri olarak kabul edilir."
    },
    { 
        ad: "Hibiskus", tur: "sifali", resim: "img/hibiskus.jpg", 
        manevi: "Zarafet.", sifali: "Tansiyon dengeleyici.",
        popup_baslik_manevi: "Zarafet ve Narin Güzellik",
        popup_detay_manevi: "Hibiskus, nadir güzelliği ve canlı renkleriyle zarafeti ve narinliği simgeler. Özellikle tropikal kültürlerde 'iyi misafir' anlamına gelir. Sevdiklerinize güzelliklerini takdir ettiğinizi göstermek için idealdir.",
        popup_baslik_sifali: "Doğal Tansiyon Dengeleyici Çay",
        popup_detay_sifali: "Hibiskus çiçekleri, yüksek antioksidan içeriği sayesinde kan basıncını düşürmeye yardımcı olur. Kurutulmuş çiçekler kaynar su ile 10 dakika demlenerek soğuk veya sıcak olarak tüketilebilir. Günümüzde özellikle yüksek tansiyon risk grubundaki kişiler tarafından yaygın olarak tercih edilmektedir, ancak ilaçlarla etkileşimine dikkat edilmelidir."
    },
    { 
        ad: "Sarı Kantaron", tur: "sifali", resim: "img/sarikantaron.jpg", 
        manevi: "Koruma.", sifali: "Doğal antidepresan.",
        popup_baslik_manevi: "Işık ve Koruma",
        popup_detay_manevi: "Sarı kantaron, geleneksel olarak kötü ruhlardan ve büyülerden korunma amacıyla kullanılmıştır. Güneşi andıran parlak sarı rengi, umudu ve pozitif enerjiyi simgeler.",
        popup_baslik_sifali: "Ruh Hali Dengeleyici Yağ ve Çay",
        popup_detay_sifali: "Sarı kantaron, hafif ve orta şiddette depresyon belirtilerini hafifletmeye yardımcı olan doğal bir antidepresandır. Çiçekleri zeytinyağında bekletilerek elde edilen kırmızımsı yağ, yanık ve yara tedavisinde harici kullanılır. Çayı ise kurutulmuş çiçeklerin demlenmesiyle elde edilir, ancak antidepresan ilaçlarla kesinlikle bir arada kullanılmamalıdır!"
    },
    { 
        ad: "Melisa", tur: "sifali", resim: "img/melisa.jpg", 
        manevi: "Neşe.", sifali: "Stres azaltıcı.",
        popup_baslik_manevi: "Neşe ve Şefkat",
        popup_detay_manevi: "Melisa (Oğul Otu), arıları kendine çektiği için 'oğul otu' adını alır ve neşeyi, şefkati ve uzun ömrü simgeler. Evlere mutluluk getirdiğine inanılır. Mutluluğunu artırmak istediğiniz kişilere sunulabilir.",
        popup_baslik_sifali: "Anksiyete ve Stres Çözümü",
        popup_detay_sifali: "Melisa yaprakları, sinir sistemini yatıştırıcı ve anksiyeteyi azaltıcı etkileriyle bilinir. Taze veya kuru yapraklarından yapılan çay, günün stresini atmak için idealdir. Ayrıca, melisa yağı aromaterapide kullanılır. Bitkiyi taze olarak toplamak ve kurutmak, en yüksek etkiyi almanızı sağlar. Yatıştırıcı etkisi günümüzde oldukça popülerdir."
    },
    { 
        ad: "Nane", tur: "sifali", resim: "img/nane.jpg", 
        manevi: "Ferahlık.", sifali: "Mide bulantısı.",
        popup_baslik_manevi: "Ferahlık ve Yenilenme",
        popup_detay_manevi: "Nane, ferahlığı, canlanmayı ve erdemi simgeler. Zihinsel yorgunluğu giderme yeteneği nedeniyle öğrencilere ilham verir.",
        popup_baslik_sifali: "Mide Bulantısı ve Sindirim Çayı",
        popup_detay_sifali: "Nane yaprağı çayı, mide bulantısı, gaz ve sindirim sorunlarına karşı en hızlı doğal çözümlerden biridir. Nane yağı ise baş ağrısı için şakaklara sürülebilir. Yaprakları kurutup cam kavanozlarda saklayın; taze nane ise buzdolabında nemli ortamda kalmalıdır."
    },
    { 
        ad: "Aloe Vera", tur: "sifali", resim: "img/aloevera.jpg", 
        manevi: "Ölümsüzlük.", sifali: "Yanıklar.",
        popup_baslik_manevi: "Ölümsüzlük ve Korunma",
        popup_detay_manevi: "Aloe Vera, zor koşullara dayanıklılığı ve uzun ömürlü olması nedeniyle ölümsüzlüğü ve korunmayı simgeler. Eski Mısır'da cenaze törenlerinde kullanılırdı. Genellikle evde bulundurularak hem manevi koruma hem de şifalı özelliklerinden faydalanılır.",
        popup_baslik_sifali: "Güneş Yanıkları ve Cilt İyileşmesi",
        popup_detay_sifali: "Aloe Vera yaprağının içindeki jel, güneş yanıkları, küçük kesikler ve ciltteki tahrişleri anında yatıştırmak için mükemmeldir. Yaprağın kesik ucunu cilde doğrudan uygulamak en etkili yöntemdir. Jeli bir kavanozda buzdolabında kısa süreli saklayabilirsiniz."
    },
    { 
        ad: "Fesleğen", tur: "sifali", resim: "img/feslegen.jpg", 
        manevi: "Bereket.", sifali: "Baş ağrısı.",
        popup_baslik_manevi: "Bereket ve Aşk",
        popup_detay_manevi: "Fesleğen, İtalya'da aşkı, Hindistan'da ise ruhsal arınmayı ve evde bereketi simgeler. Eski inanışlara göre evde fesleğen bulundurmak zenginliği ve iyi şansı çeker. Evinize pozitif enerji ve bereket dilemek için idealdir.",
        popup_baslik_sifali: "Gerginlik Baş Ağrısı Giderici",
        popup_detay_sifali: "Fesleğen yaprakları, içerdiği uçucu yağlar sayesinde gerginlikten kaynaklanan baş ağrısını hafifletmeye yardımcı olur. Birkaç taze fesleğen yaprağını çiğnemek veya kurutulmuş yapraklarından çay demlemek rahatlama sağlar. Yağı, aromaterapide zihni açmak için kullanılır. Taze tutmak için bol sulama yapılmalıdır."
    },
    { 
        ad: "Isırgan Otu", tur: "sifali", resim: "img/isirgan.jpg", 
        manevi: "Direnç.", sifali: "Romatizma.",
        popup_baslik_manevi: "Savunma ve Direnç",
        popup_detay_manevi: "Isırgan otu, dokunulduğunda verdiği tepki nedeniyle savunmayı ve güçlü karakteri simgeler. Hayatın zorluklarına karşı yılmayanlara verilen bir semboldür.",
        popup_baslik_sifali: "Romatizma ve Kan Temizleyici",
        popup_detay_sifali: "Isırgan yaprakları, demir, C vitamini ve mineraller açısından zengindir ve güçlü bir kan temizleyicidir. Kurutulmuş yapraklarından yapılan çay, romatizma ağrılarını hafifletmeye ve mevsim alerjilerini azaltmaya yardımcı olur. Yaprakları toplarken eldiven kullanılmalı, kurutulduktan sonra kapalı cam kavanozda hava almayacak şekilde saklanmalıdır."
    },
    { 
        ad: "Okaliptüs", tur: "sifali", resim: "img/okaliptus.jpg", 
        manevi: "Temizlik.", sifali: "Nefes açıcı.",
        popup_baslik_manevi: "Arınma ve Şifa",
        popup_detay_manevi: "Okaliptüs, temizliği, korumayı ve şifayı simgeler. Odaklanmayı ve zihinsel berraklığı artırmak için de kullanılır. Yeni bir eve veya çalışma alanına arınma ve ferahlık getirmesi amacıyla konulabilir.",
        popup_baslik_sifali: "Solunum Yolları Mucizesi Buhar Banyosu",
        popup_detay_sifali: "Okaliptüs yaprakları, içerdiği sineol sayesinde güçlü bir nefes açıcıdır. Birkaç damla okaliptüs yağını sıcak suya damlatarak yapılan buhar banyosu, sinüsleri açar ve öksürüğü hafifletir. Yaprakları kurutulup bir bez torbada banyoda saklanabilir. Yağı çok güçlü olduğu için direkt cilde uygulanmamalıdır."
    },
    { 
        ad: "Yasemin", tur: "sifali", resim: "img/yasemin.jpg", 
        manevi: "Zarafet, bilgelik ve derin duygular.", sifali: "Sakinleştirici.",
        popup_baslik_manevi: "Gece Açan Güzellik ve Ruhsal Derinlik",
        popup_detay_manevi: "Yasemin, özellikle akşam saatlerinde açmasıyla bilinir ve gizemi, ruhsal zarafeti ve duygusal derinliği simgeler. Bilgelik ve umudu temsil ederken, aynı zamanda kalıcı ve saf bir sevgiyi de ifade eder. Hediye olarak vermek, kişinin narin ruhuna ve içsel güzelliğine duyulan saygıyı belirtir.",
        popup_baslik_sifali: "Huzur Veren Yasemin Çayı ve Aromaterapi",
        popup_detay_sifali: "Yasemin çiçekleri, hafif sedatif (sakinleştirici) ve ruh halini iyileştirici özelliklere sahiptir. Yeşil çay ile karıştırılarak yapılan yasemin çayı, stresi azaltır ve rahatlama sağlar. Yasemin yağı ise aromaterapide duygusal dengeyi kurmak için yaygın olarak kullanılır. Taze çiçekleri toplanıp kurutulduktan sonra hava almayan kaplarda saklanır.",
    },
    { 
        ad: "Zerdeçal", tur: "sifali", resim: "img/zerdecal.jpg", 
        manevi: "Arınma.", sifali: "Güçlü iltihap sökücü.",
        popup_baslik_manevi: "Güneş Işığı ve Şans",
        popup_detay_manevi: "Hint kültüründe zerdeçal, kutsallığı, şansı ve arınmayı simgeler. Geleneksel törenlerde ve ritüellerde kullanılır.",
        popup_baslik_sifali: "Doğanın Güçlü Anti-İnflamatuarı",
        popup_detay_sifali: "Zerdeçalın ana etken maddesi olan kurkumin, güçlü bir iltihap sökücü ve antioksidandır. En etkili kullanım şekli, karabiber ile birlikte yağa karıştırılarak (Altın Süt) tüketmektir, çünkü emilimi artar. Toz halinde, serin ve kuru bir yerde saklanarak tazeliğini uzun süre korur. Günümüzde en çok araştırılan şifalı bitkilerdendir."
    },
    { 
        ad: "Zencefil", tur: "sifali", resim: "img/zencefil.jpg", 
        manevi: "Canlılık.", sifali: "Mide ve sindirim.",
        popup_baslik_manevi: "Canlılık ve Güç",
        popup_detay_manevi: "Zencefil, gücü, canlılığı ve enerjiyi simgeler. Ruha ve bedene canlılık kattığına inanılır.",
        popup_baslik_sifali: "Mide ve Sindirim Rahatlatıcısı",
        popup_detay_sifali: "Taze zencefil, mide bulantısı, hazımsızlık ve soğuk algınlığı semptomlarını hafifletmede çok etkilidir. Birkaç dilim taze zencefili kaynar suyla demleyip limon ve balla tüketmek, sindirimi rahatlatır. Taze kökleri buzdolabında veya dondurucuda uzun süre saklanabilir. Güçlü etkisi nedeniyle günümüzde de ilk başvurulan doğal çözümlerden biridir."
    },
    { 
        ad: "Kekik", tur: "sifali", resim: "img/kekik.jpg", 
        manevi: "Cesaret.", sifali: "Antiseptik özellik.",
        popup_baslik_manevi: "Cesaret ve Güç",
        popup_detay_manevi: "Kekik, antik çağlardan beri cesareti ve gücü simgeler. Eski Yunan savaşçıları, savaşa girmeden önce kekik banyosu yaparlardı.",
        popup_baslik_sifali: "Doğal Antiseptik ve Balgam Söktürücü",
        popup_detay_sifali: "Kekik, güçlü antiseptik ve antimikrobiyal özelliklere sahiptir ve özellikle öksürük ve bronşit tedavisinde kullanılır. Kekik yağı çok güçlüdür; bir taşıyıcı yağ ile seyreltilmeden cilde uygulanmamalıdır. Kuru kekik, karanlık ve kuru yerde uzun süre saklanabilir."
    },
    { 
        ad: "Civanperçemi", tur: "sifali", resim: "img/civanpercemi.jpg", 
        manevi: "Savaşçı ruh.", sifali: "Kadın hastalıkları.",
        popup_baslik_manevi: "İyileşme ve Savaşçı Ruh",
        popup_detay_manevi: "Civanperçemi, mitolojide yaraları iyileştirmek için kullanıldığına inanılan, savaşçı ruhu ve direnci simgeler. Birine güçlü kalması ve iyileşmesini dilemek için hediye edilir. Uzun süreli ve sadık aşkı da temsil eder.",
        popup_baslik_sifali: "Geleneksel Kadın Sağlığı Desteği",
        popup_detay_sifali: "Civanperçemi, geleneksel olarak adet düzensizliklerini gidermede ve menopoz semptomlarını hafifletmede kullanılmıştır. Kurutulmuş çiçekleri ve yaprakları, çay olarak demlenerek düzenli tüketilir. Kullanımı günümüzde de halk arasında popülerdir."
    },
    { 
        ad: "Ebegümeci", tur: "sifali", resim: "img/ebegumeci.jpg", 
        manevi: "Yumuşaklık.", sifali: "Öksürük kesici.",
        popup_baslik_manevi: "Yumuşaklık ve Şefkat",
        popup_detay_manevi: "Ebegümeci, tatlı ve narin yapısıyla yumuşaklığı, şefkati ve koruyuculuğu simgeler. Genellikle annelere veya şefkatli, merhametli kişilere verilen bir çiçektir. Huzur ve rahatlığı çağrıştırır.",
        popup_baslik_sifali: "Öksürük ve Boğaz Yumuşatıcı",
        popup_detay_sifali: "Ebegümeci çiçekleri ve yaprakları, içerdiği yüksek müsilaj (sümüksü madde) sayesinde boğazı ve solunum yollarını kaplayarak öksürüğü keser ve tahrişi hafifletir. Kurutulmuş yapraklarından yapılan çay, ılık olarak yavaşça içilmelidir. Bitkiyi kurutup hava almayacak şekilde cam kavanozlarda saklayın."
    },
    { 
        ad: "Rezene", tur: "sifali", resim: "img/rezene.jpg", 
        manevi: "Güç.", sifali: "Gaz giderici.",
        popup_baslik_manevi: "Güç ve Övgü",
        popup_detay_manevi: "Rezene, gücü ve uzun ömrü simgeler. Antik Roma'da savaşçıların dayanıklılığını artırmak için kullanılırdı. Birine azim ve güçlü bir karakter dilediğinizi göstermek için tercih edilir.",
        popup_baslik_sifali: "Gaz ve Hazımsızlık Tedavisi",
        popup_detay_sifali: "Rezene tohumları, içerdiği uçucu yağlar sayesinde sindirimi kolaylaştırır, gaz ve şişkinliği giderir. Özellikle bebeklerde kolik ve gaz sancıları için çay olarak demlenip verilebilir. Tohumları kapalı, serin ve kuru bir yerde saklamak gerekir."
    },
    { 
        ad: "Defne Yaprağı", tur: "sifali", resim: "img/defneyapragi.jpg", 
        manevi: "Zafer.", sifali: "Solunum yolları.",
        popup_baslik_manevi: "Zafer ve Onur",
        popup_detay_manevi: "Defne yaprağı, antik çağlarda bilgeliğin, şerefin, zaferin ve üstün başarının sembolüydü. Roma İmparatorları ve Olimpiyat galipleri defne yaprağından taç takardı.",
        popup_baslik_sifali: "Geleneksel Solunum Açıcı",
        popup_detay_sifali: "Defne yaprağı, çay olarak tüketildiğinde hafif sindirim kolaylaştırıcı ve balgam söktürücü özelliklere sahiptir. Birkaç yaprağı kaynayan suya atarak yapılan buhar banyosu, tıkalı sinüsleri ve solunum yollarını açar. Yaprakları kurutup cam kavanozda saklayarak yemeklerde ve şifalı amaçlarla kullanın."
    },
    { 
        ad: "Ginseng", tur: "sifali", resim: "img/ginseng.jpg", 
        manevi: "Uzun ömür.", sifali: "Enerji verir.",
        popup_baslik_manevi: "Uzun Ömür ve Hayat Gücü",
        popup_detay_manevi: "Ginseng, 'insan kökü' anlamına gelir ve uzun ömrü, sağlığı ve hayat gücünü simgeler. Özellikle yaşlılara veya sağlık sorunları olan kişilere güç ve iyileşme dilemek için hediye edilir.",
        popup_baslik_sifali: "Adaptogen ve Enerji Kaynağı",
        popup_detay_sifali: "Ginseng, vücudun strese uyum sağlamasına yardımcı olan bir adaptogen olarak bilinir ve enerji seviyelerini artırır. Kurutulmuş kökleri dilimlenerek çay olarak demlenir veya toz halinde tüketilir. Düzenli ancak kontrollü tüketimi önerilir, çünkü yüksek dozlar uykusuzluğa neden olabilir."
    },
    { 
        ad: "Kedi Otu", tur: "sifali", resim: "img/kediotu.jpg", 
        manevi: "Uyku.", sifali: "Uykusuzluk tedavisi.",
        popup_baslik_manevi: "Sakinlik ve Huzur",
        popup_detay_manevi: "Kedi otu, kediler üzerindeki yatıştırıcı etkisi nedeniyle rahatlamayı, sakinliği ve huzuru simgeler.",
        popup_baslik_sifali: "Doğal Uykusuzluk Tedavisi",
        popup_detay_sifali: "Kedi otu kökü, doğal bir sedatif (yatıştırıcı) olarak uykusuzluk ve sinirsel gerginlik tedavisinde yaygın olarak kullanılır. Kokusu yoğun olduğu için toz formunda veya kapsül olarak tüketilmesi daha popülerdir."
    },
    { 
        ad: "Altınbaşak", tur: "sifali", resim: "img/altinbasak.jpg", 
        manevi: "Zenginlik.", sifali: "Böbrek dostu.",
        popup_baslik_manevi: "Zenginlik ve Şans",
        popup_detay_manevi: "Parlak sarı rengi ve bereketli görünümü nedeniyle altınbaşak, zenginliği, şansı ve refahı simgeler. Yeni bir işe başlayan veya finansal başarı dilediğiniz kişilere hediye edilebilir.",
        popup_baslik_sifali: "Böbrek ve İdrar Yolları Desteği",
        popup_detay_sifali: "Altınbaşak (Solidago), güçlü idrar söktürücü ve iltihap giderici özellikleri sayesinde böbrek ve idrar yolu enfeksiyonlarının tedavisini destekler. Kurutulmuş çiçekleri ve yaprakları çay olarak demlenir. Özellikle idrar yolu enfeksiyonu (İYE) durumlarında popüler bir doğal destektir."
    },
    { 
        ad: "Hanımeli", tur: "sifali", resim: "img/hanimeli.jpg", 
        manevi: "Bağlılık.", sifali: "İdrar söktürücü.",
        popup_baslik_manevi: "Sadık Bağlılık ve Aşk",
        popup_detay_manevi: "Hanımeli, sarılarak büyüme şekli nedeniyle sadık bağlılığı ve güçlü aşk bağlarını simgeler. Özellikle uzun süreli evliliklerde ve dostluklarda sevgiyi ve bağlılığı pekiştirmek için kullanılır.",
        popup_baslik_sifali: "Geleneksel İdrar Söktürücü Çay",
        popup_detay_sifali: "Hanımeli çiçekleri, geleneksel Çin tıbbında ve halk tıbbında idrar söktürücü ve hafif detoks etkisi nedeniyle kullanılmıştır. Kurutulmuş çiçekler çay olarak demlenerek tüketilir. Hoş kokusu sayesinde çayının içimi keyiflidir. Bitkiyi güneşten uzak, serin bir yerde saklayın."
    },
    { 
        ad: "Pelin Otu", tur: "sifali", resim: "img/pelinotu.jpg", 
        manevi: "Acı gerçekler.", sifali: "İştah açıcı.",
        popup_baslik_manevi: "Acı Gerçek ve Yokluk",
        popup_detay_manevi: "Pelin otu, son derece acı tadı nedeniyle hüzün, keder ve acı gerçekleri simgeler. Manevi olarak, acının kabullenilmesi ve kişinin zorluklarla yüzleşmesi anlamına gelir. Genellikle absint gibi içkilerin ana bileşeni olarak tanınır.",
        popup_baslik_sifali: "İştah Artırıcı Tonik",
        popup_detay_sifali: "Pelin otunun acı bileşikleri, sindirim salgılarını ve iştahı artırmak için geleneksel olarak kullanılmıştır. Kurutulmuş yapraklarından yapılan çok az miktarda çay, yemeklerden önce iştah açmak için tüketilir.Ancak yüksek dozları zehirlenmeye yol açabilir, bu nedenle kullanımı büyük dikkat ve uzman gözetimi gerektirir."
    },
    { 
        ad: "Maydanoz", tur: "sifali", resim: "img/maydanoz.jpg", 
        manevi: "Şenlik.", sifali: "Ödem atıcı.",
        popup_baslik_manevi: "Şenlik ve Neşe",
        popup_detay_manevi: "Maydanoz, Antik Yunan'da zaferin ve şenliğin sembolüydü. Aynı zamanda yaşamın kısalığını da simgeler.",
        popup_baslik_sifali: "Güçlü Ödem Sökücü ve Detoks",
        popup_detay_sifali: "Maydanoz, doğal bir idrar söktürücü (diüretik) olarak vücuttan fazla suyun ve ödemin atılmasına yardımcı olur. Taze maydanoz sapları kaynatılarak veya yaprakları çiğ olarak salatalarda bolca tüketilir. Yüksek K ve C vitamini içeriği nedeniyle çok besleyicidir. Taze olarak kullanmak en etkili yöntemdir."
    },
    { 
        ad: "Dereotu", tur: "sifali", resim: "img/dereotu.jpg", 
        manevi: "Koruma.", sifali: "Süt artırıcı.",
        popup_baslik_manevi: "Koruma ve Şans",
        popup_detay_manevi: "Dereotu, eski inanışlara göre kötü şanstan ve nazardan koruma sağlardı. Cesaret ve zenginlik getirdiğine inanılırdı. Genellikle evin etrafına veya kapı girişine asılırdı.",
        popup_baslik_sifali: "Emziren Anneler İçin Süt Artırıcı",
        popup_detay_sifali: "Dereotu tohumları, geleneksel olarak emziren annelerde süt üretimini (galaktagog etki) artırmak için kullanılır. Tohumlar çay olarak demlenir veya yemeklere bolca eklenir. Ayrıca tohum çayı bebeklerdeki gaz sancılarına da iyi gelir. Tohumları hava almayan kaplarda saklamak gerekir."
    },
    { 
        ad: "Kişniş", tur: "sifali", resim: "img/kisnis.jpg", 
        manevi: "Ölümsüzlük.", sifali: "Ağır metal atıcı.",
        popup_baslik_manevi: "Ölümsüzlük ve Gizli Değer",
        popup_detay_manevi: "Kişniş tohumları, Mısır mezarlarında bulunması nedeniyle ölümsüzlüğü ve gizli değerleri simgeler. Aynı zamanda zenginlik ve bolluk getirdiğine de inanılır. Manevi olarak, kaybolan değerlerin hatırlanmasını temsil eder.",
        popup_baslik_sifali: "Vücudu Ağır Metallerden Arındırma",
        popup_detay_sifali: "Kişniş yaprakları (kişniş otu), doğal olarak ağır metalleri (cıva, kurşun vb.) vücuttan atmaya yardımcı olan bir 'şelatör' olarak bilinir. Taze yaprakları salatalara bolca eklenir veya smoothie'lere katılır. Bu detoks etkisi, günümüzde fonksiyonel tıp çevrelerinde oldukça popülerdir."
    },
    { 
        ad: "Kuşburnu", tur: "sifali", resim: "img/kusburnu.jpg", 
        manevi: "Şiirsel aşk.", sifali: "C vitamini deposu.",
        popup_baslik_manevi: "Şiirsel Aşk ve İyileşme",
        popup_detay_manevi: "Kuşburnu, vahşi bir gülün meyvesi olması nedeniyle şiirsel ve iyileşmeyi simgeler.",
        popup_baslik_sifali: "C Vitamini Bombası ve Bağışıklık",
        popup_detay_sifali: "Kuşburnu meyvesi, portakaldan kat kat daha fazla C vitamini içerir ve bağışıklık sistemini destekler. Kurutulmuş meyveleri kaynatılarak yapılan çay, soğuk algınlığı ve gribe karşı koruyucudur. Çayı uzun süre kaynatmamak, C vitamininin korunması için önemlidir."
    },
    { 
        ad: "Çörek Otu", tur: "sifali", resim: "img/corekotu.jpg", 
        manevi: "Her derde deva.", sifali: "Bağışıklık.",
        popup_baslik_manevi: "Kutsallık ve Şifa",
        popup_detay_manevi: "Çörek otu, Peygamberimiz (sav) tarafından 'ölümden başka her derde deva' olarak anılması nedeniyle, kutsallığı, koruyuculuğu ve evrensel şifayı simgeler. En güçlü manevi ve şifalı anlam taşıyan bitkilerden biridir. Her türlü zorluk ve hastalık için umudu temsil eder.",
        popup_baslik_sifali: "Bağışıklık Sistemi Güçlendiricisi",
        popup_detay_sifali: "Çörek otu yağı, içerdiği timokinon sayesinde bağışıklık sistemini güçlü bir şekilde destekler ve anti-inflamatuar özelliklere sahiptir. Yağ, günde bir çay kaşığı miktarında aç karnına içilebilir. Tohumları kavrulup bal ile karıştırılarak da tüketilir. Yağı, karanlık ve serin bir yerde saklamak etki gücünü korur."
    },
    { 
        ad: "Kimyon", tur: "sifali", resim: "img/kimyon.jpg", 
        manevi: "Sadakat.", sifali: "Gaz giderici.",
        popup_baslik_manevi: "Sadakat ve Aşk",
        popup_detay_manevi: "Kimyon, geleneksel olarak sadakati ve bağlılığı simgeler. Romalılarda bu anlamı nedeniyle düğünlerde kullanılırdı. Aynı zamanda zenginlik ve bereket getirdiğine de inanılır.",
        popup_baslik_sifali: "Sindirim ve Gaz Giderici",
        popup_detay_sifali: "Kimyon tohumları, hazımsızlık, gaz ve şişkinliği hafifletmede çok etkilidir. Tohumları kaynar suyla demleyip çay olarak içmek veya yemeklere bolca eklemek sindirimi kolaylaştırır. Özellikle yemek sonrası oluşan ağırlık hissini azaltır. Tohumları kapalı baharatlıkta, nemden uzakta saklamak gerekir."
    },
    { 
        ad: "Zeytin Yaprağı", tur: "sifali", resim: "img/zeytinyapragi.jpg", 
        manevi: "Barış ve ölümsüzlük.", sifali: "Bağışıklık güçlendirici.",
        popup_baslik_manevi: "Barış ve Uzun Ömür",
        popup_detay_manevi: "Zeytin ağacı, binlerce yıllık ömrü ve mitolojideki yeri nedeniyle barışı, umudu ve ölümsüzlüğü simgeler. Birine zeytin yaprağı hediye etmek, ona uzun ömür, barış ve huzur dilemek anlamına gelir.",
        popup_baslik_sifali: "Doğal Antibiyotik ve Tansiyon Dengeleyici",
        popup_detay_sifali: "Zeytin yaprağı, içerdiği oleuropein sayesinde güçlü antioksidan ve bağışıklık güçlendirici özelliklere sahiptir. Yaprakları kurutulup kaynar suyla demlenerek yapılan çay, yüksek tansiyonu dengelemeye ve soğuk algınlığına karşı korumaya yardımcı olur. Günümüzde giderek popülerleşen doğal desteklerdendir."
    },
    { 
        ad: "Keten", tur: "sifali", resim: "img/keten.jpg", 
        manevi: "Kader.", sifali: "Sindirim.",
        popup_baslik_manevi: "Kader ve Evcil Bağlılık",
        popup_detay_manevi: "Keten, geleneksel olarak 'kader' ve 'evcillik' anlamlarını taşır. Bir kişinin yaşam yolculuğunu ve bağlılıklarını temsil eder. Aynı zamanda doğanın basit ve saf güzelliğini simgeler.",
        popup_baslik_sifali: "Omega-3 ve Sindirim Düzenleyici",
        popup_detay_sifali: "Keten tohumu, yüksek lif içeriği ve zengin Omega-3 yağ asitleri (ALA) sayesinde sindirim sistemini düzenler. Tohumları öğütülerek yoğurt veya salatalara eklenir. Tohumun öğütülmeden tüketimi sindirilemediği için çok etkili değildir. Toksinleri ve atıkları vücuttan atmaya yardımcı olur. Öğütülmüş keteni buzdolabında saklamak gerekir."
    },
    { 
        ad: "Safran", tur: "sifali", resim: "img/safran.jpg", 
        manevi: "Lüks.", sifali: "Antidepresan.",
        popup_baslik_manevi: "Lüks ve Değer",
        popup_detay_manevi: "Safran, dünyanın en pahalı baharatı olması nedeniyle zenginliği, lüksü ve eşsiz değeri simgeler. Birine safran hediye etmek, ona en yüksek değeri verdiğinizi gösterir. Aynı zamanda gücü ve zarafeti de temsil eder.",
        popup_baslik_sifali: "Ruh Halini İyileştirici",
        popup_detay_sifali: "Safran iplikleri, ruh halini iyileştirme ve hafif depresyon belirtilerini hafifletme potansiyeli nedeniyle bilimsel olarak incelenmektedir. Birkaç iplik, sıcak suya demlenerek çay olarak tüketilebilir veya yemeklere eklenebilir. Etkili kullanımı için ipliklerin kalitesine dikkat edilmeli ve hava almayacak şekilde saklanmalıdır."
    },
    { 
        ad: "Sumak", tur: "sifali", resim: "img/sumak.jpg", 
        manevi: "Ekşi hayat.", sifali: "Antioksidan.",
        popup_baslik_manevi: "Hayatın Zorlu Tadı",
        popup_detay_manevi: "Sumak, ekşi ve yoğun tadı nedeniyle hayatın zorlu veya keskin yönlerini simgeler. Ancak bu zorlukların sonunda gelen lezzeti ve gücü de temsil eder.",
        popup_baslik_sifali: "Güçlü Antioksidan ve Kan Şekeri Dengeleyici",
        popup_detay_sifali: "Sumak, güçlü antioksidanlar açısından zengin bir baharattır ve kan şekeri seviyelerini dengelemeye yardımcı olduğu bilinir. Kuru tozunu salatalara veya yoğurda ekleyerek tüketmek en yaygın kullanım şeklidir. Kuru ve serin bir yerde muhafaza edilmelidir. Günümüzde güçlü serbest radikal savaşçısı olarak bilinir."
    },
    { 
        ad: "Mürver Çiçeği", tur: "sifali", resim: "img/murver.jpg", 
        manevi: "Koruma.", sifali: "Grip ve soğuk algınlığı.",
        popup_baslik_manevi: "Koruma ve Kutsallık",
        popup_detay_manevi: "Mürver (Elder), geleneksel olarak kötü ruhlardan korunma sağladığına inanılan kutsal bir ağaçtır. Evlerin yakınına dikilmesi, o evi koruduğu düşünülürdü. Huzur ve güvenlik arayanlara manevi bir sembol olarak verilir.",
        popup_baslik_sifali: "Grip ve Soğuk Algınlığı İçin Şurup",
        popup_detay_sifali: "Mürver meyvesi (Elderberry) ve çiçekleri, özellikle grip ve soğuk algınlığı semptomlarının süresini ve şiddetini azaltmada etkilidir. Meyvelerinden yapılan şurup, kış aylarında bağışıklık sistemini desteklemek için kullanılır. Çiçekleri ise çay olarak demlenir. Meyvelerinin çiğ tüketimi mide rahatsızlığı yapabilir, bu yüzden mutlaka pişirilmelidir."
    }
];

// 2. SAYFALAMA VE GÖSTERİM (DEĞİŞİKLİK YOK)
const flowerList = document.getElementById('flower-list');
const loadMoreBtn = document.getElementById('loadMoreBtn');
let gosterilenSayisi = 12; 
let suankiListe = cicekler; 

function ekranayazdir(veri) {
    flowerList.innerHTML = "";
    
    if (veri.length === 0) {
        flowerList.innerHTML = "<p style='width:100%; text-align:center;'>Aranan çiçek bulunamadı.</p>";
        loadMoreBtn.style.display = "none";
        return;
    }

    const dilimlenmisVeri = veri.slice(0, gosterilenSayisi);

    dilimlenmisVeri.forEach((cicek, index) => { 
        let kategoriYazisi = (cicek.tur === "sifali") ? "ŞİFALI" : "MANEVİ";
        let kategoriIcon = (cicek.tur === "sifali") ? "💊" : "✨";
        // Her çiçeğin kendi dizinindeki index'ini modalAc() fonksiyonuna gönderiyoruz
        const cicekIndex = cicekler.findIndex(item => item.ad === cicek.ad);

        const kart = `
            <div class="card">
                <img src="${cicek.resim}" 
                    alt="${cicek.ad}" 
                    loading="lazy" 
                    onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1490750967868-58cb75069ed6?w=500&q=80';">
                <div class="card-body">
                    <h3 class="card-title">${cicek.ad}</h3>
                    <p class="card-info"><strong>${kategoriIcon} Kimliği:</strong> ${cicek[cicek.tur]}</p>
                    
                    <button class="card-detail-btn" onclick="modalAc(${cicekIndex})">
                        Detaylı İncele (${kategoriYazisi})
                    </button>
                </div>
            </div>
        `;
        flowerList.innerHTML += kart;
    });

    if (gosterilenSayisi >= veri.length) {
        loadMoreBtn.style.display = "none";
    } else {
        loadMoreBtn.style.display = "inline-block";
    }
}

ekranayazdir(cicekler);

// 3. DİĞER FONKSİYONLAR (DEĞİŞİKLİK YOK)
function dahaFazlaGoster() {
    gosterilenSayisi += 12; 
    ekranayazdir(suankiListe); 
}

function filtrele(kategori) {
    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active-filter'));
    event.target.classList.add('active-filter');

    if (kategori === 'hepsi') {
        suankiListe = cicekler;
    } else {
        suankiListe = cicekler.filter(c => c.tur === kategori);
    }
    gosterilenSayisi = 12; 
    ekranayazdir(suankiListe);
}

const searchInput = document.getElementById('search-input');
searchInput.addEventListener('keyup', (e) => {
    const aranan = e.target.value.toLowerCase();
    suankiListe = cicekler.filter(c => c.ad.toLowerCase().includes(aranan));
    gosterilenSayisi = 12;
    ekranayazdir(suankiListe);
});

function sayfaDegistir(sayfaId, btn) {
    document.querySelectorAll('.sayfa-bolumu').forEach(s => s.classList.add('gizli'));
    document.getElementById(sayfaId).classList.remove('gizli');
    document.querySelectorAll('.nav-links button').forEach(b => b.classList.remove('active-btn'));
    if(btn) btn.classList.add('active-btn');
}

let slaytIndex = 0;
const slaytlar = document.querySelectorAll('.slider-wrapper img');
const sliderWrapper = document.querySelector('.slider-wrapper');
if(sliderWrapper){
    function slaytDegistir(yon) {
        slaytIndex += yon;
        if(slaytIndex >= slaytlar.length) slaytIndex=0;
        if(slaytIndex < 0) slaytIndex=slaytlar.length-1;
        sliderWrapper.style.transform = `translateX(-${slaytIndex*100}%)`;
    }
    setInterval(()=>slaytDegistir(1), 4000);
}

let mybutton = document.getElementById("scrollTopBtn");
window.onscroll = function(){
    if(document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) mybutton.style.display = "block";
    else mybutton.style.display = "none";
};
function yukariCik(){ window.scrollTo({top:0, behavior:'smooth'}); }
function toggleDarkMode(){ 
    document.body.classList.toggle("dark-mode");
    document.getElementById("darkBtn").innerText = document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
}

// --- POP-UP (MODAL) İŞLEVLERİ (DEĞİŞİKLİK YOK) ---

const modal = document.getElementById('flowerModal');
const modalTitle = document.getElementById('modalTitle');
const modalCategory = document.getElementById('modalCategory');
const modalImage = document.getElementById('modalImage');
const modalInfoTitle = document.getElementById('modalInfoTitle');
const modalDetailContent = document.getElementById('modalDetailContent');
const modalExtraTitle = document.getElementById('modalExtraTitle');
const modalExtraContent = document.getElementById('modalExtraContent');


function modalAc(cicekIndex) {
    const cicek = cicekler[cicekIndex];

    if (!cicek) return;

    // Pop-up'ı doldur
    modalTitle.textContent = cicek.ad;
    modalImage.src = cicek.resim;
    modalImage.alt = cicek.ad;

    const isSifali = cicek.tur === "sifali";

    // Ana Detay (Şifalı ise Reçete, Manevi ise Hikaye)
    modalInfoTitle.textContent = isSifali ? cicek.popup_baslik_sifali : cicek.popup_baslik_manevi;
    modalDetailContent.textContent = isSifali ? cicek.popup_detay_sifali : cicek.popup_detay_manevi;

    // Ek Detay (Karşıt Kimlik)
    modalExtraTitle.textContent = isSifali ? cicek.popup_baslik_manevi : cicek.popup_baslik_sifali;
    modalExtraContent.textContent = isSifali ? cicek.popup_detay_manevi : cicek.popup_detay_sifali;
    
    // Etiket ve Stil
    modalCategory.textContent = isSifali ? "ŞİFALI / REÇETE ODAKLI" : "MANEVİ / HİKAYE ODAKLI";
    modalCategory.style.backgroundColor = isSifali ? '#a8d5ba' : '#f7c3c3';
    modalCategory.style.color = isSifali ? '#2c5e41' : '#b30000';
    
    // Zakkum Uyarısı (Zehirlidir, kullanılmaz.)
    if (cicek.ad === "Zakkum") {
        modalExtraContent.textContent = "Uyarı: Zakkum'un tüm kısımları zehirlidir ve içsel/harici kullanımı kesinlikle tehlikelidir. Tıbbi amaçla kullanılamaz.";
        modalExtraTitle.textContent = "🛑 Zehirlilik Uyarısı";
        modalExtraTitle.style.color = "red";
    } else {
         // Diğer çiçekler için normal renklere geri dön
        modalExtraTitle.style.color = isSifali ? '#2c5e41' : '#b30000';
    }


    // Modal'ı görünür yap
    modal.style.display = "block";
    document.body.style.overflow = "hidden"; 
}

function modalKapat() {
    modal.style.display = "none";
    document.body.style.overflow = "auto"; 
}

window.onclick = function(event) {
    if (event.target === modal) {
        modalKapat();
    }
}
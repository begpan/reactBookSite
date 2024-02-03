# Routes

Routes: tarayıcıdaki url'i izler url değiştiğinde
yol tanımladığımız route'lardan birinin path
değeri ile eşleşirse ekrana o route'un elementini basar

# Link

- Proje içerisnde yönlendirme işlemlendirde a etiketi yerine kullanılır.
- Href yerine to değeri yönlendirilecek sayfayı belirler

# Navlink

- Link etiketi iile aynı görevi yapar

- Kullanıcı eğerki o linkin to değerii ile yönlendirme yaptığı sayfadaysa link active class'ı alır

# Dynamic Route

- Sayfa içeriğini url'den alınan parametrele göre değiştiği sayfalara verdiğimiz isim.

- Örn:

- Yoturube video sayfası
- Netflix film detay sayfası
- Amazon ürün sayfası

# useLocation

- Kullanıncın bulunduğu sayfa ile alakalı bilgileri alır

- state / path / hash / param

# useNavigate

- Linkin fonksiyon karşılığı
- Kullanabilmesi için bir kere çağrılması gerkeli bileşende
- nconst navigate = useNavigate();

# Search Params (Arama Parametresi)

- Normalde state'de ttuucağımız değerleri arama parametresinde tutmak isteyebiliriz

- State'de tutlan veriler sayfa yenilidğinde kaybolur

- Ama arama parametrelerinde böyle bir durum söz konusu değildir.

- Bu yüzden sayfa yenilenenince kaybet istemeyiceğimiz örneğin filtreleme değerlerini arama parametresi olarka tutarız

# Nested Router (İç İçe Yollar)

<!--  -->

# reactBookSite

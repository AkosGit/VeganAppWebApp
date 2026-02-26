'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "19fab257998863e9483e2c4d70508886",
"version.json": "60f02eff9d2505e57ca6a9b51747f75f",
"index.html": "5d6fb0311a13119cd8887fa6556fe10c",
"/": "5d6fb0311a13119cd8887fa6556fe10c",
"main.dart.js": "ae0e4c8cd72829d6da0645067ea78f24",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "9d221c5a58713d69f7791db73646e8be",
"assets/AssetManifest.json": "1d3eb25a1146854eb1ccb8b1960a4323",
"assets/NOTICES": "f3f65045a6098b6c8ac6ae0dd3da8205",
"assets/FontManifest.json": "67a28da3784fc091c2f816d615fbf08a",
"assets/AssetManifest.bin.json": "d2f709224535f04e4e61f3f34986c374",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/flutter_map/lib/assets/flutter_map_logo.png": "208d63cc917af9713fc9572bd5c09362",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "269f971cec0d5dc864fe9ae080b19e23",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "262525e2081311609d1fdab966c82bfc",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "3856f277a677bb0c09b8da1944508f5c",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "47bb9e5e3e13ad0fb3b45d2c3933cbbe",
"assets/fonts/MaterialIcons-Regular.otf": "b250b40b05de8282c6518a7f3cdad068",
"assets/assets/products/vegan_chedar_main.webp": "b0ed25a98298c9da5b6d53d7c1cbd92c",
"assets/assets/products/paradicsom_konzerv_main.webp": "c471776062c88e10e003f8c6d6dc66cd",
"assets/assets/products/basmati_rizs_secondary.webp": "2e02f1cadcdb4cb0622daa579dc99912",
"assets/assets/products/vorosbab_konzerv_main.webp": "7c0c7f6baa0124e4fdc3b3741b79ae1e",
"assets/assets/products/petrezselyem_fuszer_main.webp": "1f40f1376673c9197cb573efb199aa0d",
"assets/assets/products/romai_komeny_main.webp": "08b72866530d3d9dbbf7efbff4a68c70",
"assets/assets/products/basmati_rizs_main.webp": "4216e727170e1a819094ff2427e6d7b5",
"assets/assets/products/csili_pehely_main.webp": "f07773219d4c39a3cf7b707ad437a41f",
"assets/assets/products/risotto_rizs_main.webp": "fc1c22fef7cd3ef2753b095f6f8332ad",
"assets/assets/products/leves_kocka_main.webp": "2d5ad27cced746955459b0e3bb2280fd",
"assets/assets/products/paradicsom_secondary.webp": "6ec396e698337fde124c965167b72342",
"assets/assets/products/himalaja_so_secondary.webp": "eaa409547942ed81b19a87647c69667e",
"assets/assets/products/vegafol_main.webp": "7759f89eef17a4536784961ea7b2fc19",
"assets/assets/products/csiperke_gomba_main.webp": "92a0634ac782d09049d53e2b2fbca14e",
"assets/assets/products/fenyomag_main.webp": "357b7521fba353c93a3360d25c1ab848",
"assets/assets/products/soreleszto_main.webp": "7d12fc9a31fca5f3091a72ba2d061cba",
"assets/assets/products/vegan_chedar_secondary.webp": "3d0cffa549e92d4367ca5d6c61d8d61d",
"assets/assets/products/durum_teszta_main.webp": "8ff9afba46778a74dbe04545cc9bcc53",
"assets/assets/products/avakado_main.webp": "779cef17e8ccd10a2bf1f0e0c1e631a9",
"assets/assets/products/kurorica_konzerv_secondary.webp": "28dee75dee9ffef84a9be927f4d94030",
"assets/assets/products/citrom_main.webp": "0c973a935a5ea44c43b5c5e19f1c9579",
"assets/assets/products/feherbor_main.webp": "4f53a18e646f392e3657c74d6e3e3cdc",
"assets/assets/products/voroshagyma_main.webp": "6c03d5045224b14a047901876fd61f9a",
"assets/assets/products/lilahagyma_main.webp": "45f94f091634693f649f0086b1b66544",
"assets/assets/products/paradicsom_konzerv_secondary.webp": "21bd61cac64757e598bab477417fc3e3",
"assets/assets/products/romai_komeny_secondary.webp": "8766385c831b28df8e8cd41a9af08493",
"assets/assets/products/himalaja_so_main.webp": "78c5a3979d1f9a21d15655b4258507e5",
"assets/assets/products/bazsalikom_main.webp": "d7abde4157f36f5cd76a25b548810dc9",
"assets/assets/products/risotto_rizs_secondary.webp": "f50dbf6d57c660bb02f63f5237593084",
"assets/assets/products/vegafol_secondary.webp": "91bfbe5242f9dd26f9bca9f59a1aa42b",
"assets/assets/products/fokhagyma_main.webp": "91ccd346d61d42fe0557a0061a40a8be",
"assets/assets/products/oliva_olaj_secondary.webp": "34d620e14ee21b59a62ef3b674a86cd7",
"assets/assets/products/paradicsom_main.webp": "873e6a6f7f607770c8108e96db802a30",
"assets/assets/products/fustolt%2520paprika_main.webp": "e9b9193d598765f1d92ccd2096ba49b4",
"assets/assets/products/kurorica_konzerv_main.webp": "4dbe093855a0156e2ac751b0c3b1cd5b",
"assets/assets/products/vadkovaszos_kenyer_main.webp": "bd86024d8c9b4d4b43c32611023e7578",
"assets/assets/products/oliva_olaj_main.webp": "79647da9708cabdd5ee6705d4ba0c86b",
"assets/assets/products/durum_teszta_secondary.webp": "47e92ef45073b5bb2807851d7a84143a",
"assets/assets/products/vorosbab_konzerv_secondary.webp": "fdd3a3a02b0a0ed064f57e78f6bce522",
"assets/assets/products/feherbor_secondary.webp": "bd772e2543c117ee3f0ece89da5e122f",
"assets/assets/products/petrezselyem_fuszer_secondary.webp": "92205b06cfcddef84244c0c47f933775",
"assets/assets/products/leves_kocka_secondary.webp": "75cf72e774296f32246230a675727285",
"assets/assets/venues/267751.webp": "565177521d254933ab8428c5e73c6a20",
"assets/assets/venues/374225.webp": "a8d70147ea17ee149935a0e654cd7c17",
"assets/assets/venues/lidl_storefront.webp": "7c95b288aadc8310c450b7beaccc700e",
"assets/assets/venues/387827.webp": "f36f1f2fa9af38d1f81b9dbc2cfc6096",
"assets/assets/venues/188261.webp": "055b1f13523c5afbdcf17f0d2f3a595e",
"assets/assets/venues/365394.webp": "89662f17b6dfc263eaeea43b1144f451",
"assets/assets/venues/325334.webp": "cc707c607b0f69a97e09484e4bfd38e8",
"assets/assets/venues/294774.webp": "a5d3cdc6c212d8b298434970568ee64d",
"assets/assets/venues/237050.webp": "398453b35c75788d55976fa24a0eb3c2",
"assets/assets/venues/271186.webp": "ca33cbb25fba4c1d2742bf8d50814714",
"assets/assets/venues/305633.webp": "6868ee125d30070ada69b97e8b26875c",
"assets/assets/venues/282045.webp": "796328968be5ddf9ccced818e4347171",
"assets/assets/venues/126527.webp": "4d0b1d7102356e3fabd92ea044493ad0",
"assets/assets/venues/93628.webp": "2e40a9c69c2f593797c078db4d24d3b4",
"assets/assets/venues/310221.webp": "3b8a4afbe035e0e7ef0de172e866c7b0",
"assets/assets/venues/204019.webp": "f126c2218cdb61187df2c707872af849",
"assets/assets/venues/43887.webp": "6d9e625819e5cadef8f7a863eceef658",
"assets/assets/venues/399130.webp": "d43e017135a2cd3440b4eafe5baf6568",
"assets/assets/venues/399608.webp": "cddd15c506f4e1ee9389a1d30bf22905",
"assets/assets/venues/215331.webp": "1aace7ec8c8e4d719241072fdd780f5a",
"assets/assets/venues/319359.webp": "de4a3d9aa2b1416c9b9ca57627ca1430",
"assets/assets/venues/447529.webp": "d8fc2ae0a89ffb75d9c073a5a6dbabda",
"assets/assets/venues/346407.webp": "7cd6a66c2634c8bb10693e4e04ce0f87",
"assets/assets/venues/386877.webp": "ecad985fa48d2deaaab18cc063605b55",
"assets/assets/venues/333481.webp": "0e2d26ccf07dd75eedc8d56be930073f",
"assets/assets/venues/414464.webp": "a06aacc9815a258edf101120fda4b970",
"assets/assets/venues/462098.webp": "ba0fbbfe15d24dede46ae508ad0104c1",
"assets/assets/venues/272128.webp": "45cfde8e0e0cda2e9412576fcd0f27fb",
"assets/assets/venues/400963.webp": "3f0c6d30166d4a91b25ed6bf3dcc52ee",
"assets/assets/venues/49013.webp": "ca284640cac895ab9bdbc3741f60824e",
"assets/assets/venues/162079.webp": "f71a41859cdcd9de1b62ea0d41066b39",
"assets/assets/venues/28078.webp": "fbea168b34f780311104674b8193dfa3",
"assets/assets/venues/462241.webp": "d103a799f8b24d93403be82989e56231",
"assets/assets/venues/168182.webp": "c60bfe9f170db4559020f0ac9681fce0",
"assets/assets/venues/489423.webp": "b74e1099f7b4a1053e52a65931fa62ca",
"assets/assets/venues/454109.webp": "97cddb71801c211d9649e33338b11b9b",
"assets/assets/venues/462386.webp": "ee5493ce170037cb4e796d9148f8a24f",
"assets/assets/venues/452376.webp": "90bc3168fc0063c2036bf698d9e81789",
"assets/assets/venues/448216.webp": "941e0c8368ba0e75f82c90e024b2f903",
"assets/assets/venues/308663.webp": "3a99abc7f6cb243f85b32670f9cca1c1",
"assets/assets/venues/406617.webp": "02b8fc350a016573f873eea9a32a6108",
"assets/assets/venues/134437.webp": "fe29826fc1307603eef7422caf2d9a02",
"assets/assets/venues/28368.webp": "ea9925d0890fa54c23455079633488e3",
"assets/assets/venues/41965.webp": "e2731e5407cc4e55e8eaa84a14152dd5",
"assets/assets/venues/383374.webp": "283439929e9c10a5ba9584b98da04620",
"assets/assets/venues/270614.webp": "14eddb21bc87b33f1ab7a54dc4bd36c5",
"assets/assets/venues/coop_storefront.jpg": "4292ecd31afbbd05a4c17f2c0e1a8fae",
"assets/assets/venues/401999.webp": "edcf5620cb7c758e720cacd4833b261c",
"assets/assets/venues/392909.webp": "092036b12a10fbea3f049f5b6bde71d7",
"assets/assets/venues/auchan_storefront.webp": "dbbf05fbf20bad4e320a78fb20544899",
"assets/assets/venues/276714.webp": "aadad8c4b4cf36b69f91b30ae7e03a64",
"assets/assets/venues/105015.webp": "ee5b673939829f7db15e4b3290c41d5a",
"assets/assets/venues/cba_storefront.jpg": "f7727325b0e5eafcd0a3b24aa39fe839",
"assets/assets/venues/459152.webp": "30024464afa5411bbc18fb033ee2bd60",
"assets/assets/venues/266827.webp": "e87079fa7a972ca2808dc7cbc022b68e",
"assets/assets/venues/184532.webp": "b35755e1e79c372f95961af5cb14ab53",
"assets/assets/venues/252574.webp": "670874f1685b3f661e54539ee5fc0e4f",
"assets/assets/venues/335156.webp": "ee6861a01bc1583e017bb48333825c69",
"assets/assets/venues/157559.webp": "0ce26f388b8279e9a9bb531e41e2fda5",
"assets/assets/venues/312136.webp": "93f550e8e843bf2a5eb4f33a6c2adda8",
"assets/assets/venues/156217.webp": "d71b1db1f9df53dd7242275cf578b426",
"assets/assets/venues/300740.webp": "21283e8cb199555639703969d9b8d1e7",
"assets/assets/venues/18107.webp": "35dea9b1ac7aa13233041196bcdc4237",
"assets/assets/venues/371438.webp": "3eb341964e78658e8a0cd443d144c440",
"assets/assets/venues/395269.webp": "57ec4c3ff8aebb3457874f5a3459975e",
"assets/assets/venues/338302.webp": "9e4694a6f3848b73bafad3a117847606",
"assets/assets/venues/311982.webp": "5ad42a7209b4e4dfad3fac39ec81fc87",
"assets/assets/venues/432477.webp": "213ce6f567c7a17858f8be73ad5ff7d9",
"assets/assets/venues/378622.webp": "66dc4c87e7e3dda29175547216a3ec3c",
"assets/assets/venues/289353.webp": "38b778d78c361b9fd02825565d6f366e",
"assets/assets/venues/spar_storefront.webp": "1011fad73bc0386f46b57d4ffaf0a550",
"assets/assets/venues/aldi_storefront.webp": "05700bbd473e21654eb26f0e0a042229",
"assets/assets/venues/442811.webp": "ecd7a04d7ee11db26309708b7440d32b",
"assets/assets/venues/354868.webp": "64ee0c7350634d0a3279444bfa430c71",
"assets/assets/venues/176403.webp": "cbc95a8a35d0f846fa458ba926f8b551",
"assets/assets/venues/138242.webp": "cbacef033913a8d62f84f53f3e741c21",
"assets/assets/venues/340915.webp": "46b1c44abeb2b90ce68da3d55af2c372",
"assets/assets/welcome_background.webp": "756aecfeab700893134c843296bcf43d",
"assets/assets/recipes/Kremes_Gombas_Rizotto.webp": "9cc5c0a9c26c3ef9d79c2bc8aaa783d3",
"assets/assets/recipes/vegan_avokado_toast.webp": "af24c4355b8ad2c5da0224daa8adc888",
"assets/assets/recipes/carbonara_gnocchy.webp": "e5c8b3caedb4b60d84651ee415551ccc",
"assets/assets/recipes/Vegan_Chili_Sin_Carne.webp": "687964aafc28aac0888f3615d3dfdbf4",
"assets/assets/recipes/Vegan_Pesto_Teszta.webp": "d378d6c6d84d4775651f49ccf1b76fb4",
"assets/assets/icons/little_plant.webp": "1c778538327e80519fcc168c6b88634f",
"assets/assets/icons/sun_icon.svg": "b071862cf42c90b556a98354481fb586",
"assets/assets/icons/save.svg": "fe32d5dd6234c4442fa61a2f395e38b9",
"assets/assets/icons/heart_icon.svg": "30cfb085feff114ea2f0fc1e11fc64b1",
"assets/assets/icons/question_icon.svg": "33f79f01444fad6ba925d5926036f418",
"assets/assets/icons/add_person_icons.svg": "4429816f5f8e53017c9bc953dabdc44f",
"assets/assets/icons/star.svg": "7d3749ab5c643fc8520fde8d0b5a2304",
"assets/assets/icons/share.svg": "4b769f0a532582e44e0f5a29cf713855",
"assets/assets/icons/person_added_icon.svg": "ef7f0a74791bb7203c44cbee3ce2e7e2",
"assets/assets/icons/comment.svg": "5e1b912ef2d58683c1575bd216452db4",
"assets/assets/icons/seed.svg": "be1bf9a80bd8c0bac54e89173ee96bad",
"assets/assets/logo.svg": "e234732ed5c37411438044da587201a7",
"assets/assets/animations/streak.json": "9c5c33c591858a4eb9283b8245620d26",
"assets/assets/animations/compass.json": "aff573c1e8d10f646a0da0c9cf6e18a8",
"assets/assets/animations/sun.json": "718bf19e17a3253f50a5a214488751b8",
"assets/assets/animations/success_2.json": "ef8cc4e8789f8ea119a47bfa5e7ce19c",
"assets/assets/animations/drop.json": "3b826fc278c330bbbba8b2993f0b12b1",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}

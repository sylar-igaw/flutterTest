'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "01eb2c11c2685e04a0e3b0556549b914",
".git/config": "db6ac476c6d99a2152f4ec3c52be8c7e",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "9a9472a49c16ba9a2bb5b1b535b9dcde",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "c9190b7376a0153b631c3c7f2a26a9af",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "28bbc5218000b6062e4eaa14ffd4968a",
".git/logs/refs/heads/main": "28bbc5218000b6062e4eaa14ffd4968a",
".git/logs/refs/remotes/origin/main": "841f4be97637381800c70a1fba7c9902",
".git/objects/00/3d615dbf13702811b1c1d2f26952dea85b05f8": "f5a2b3d505f7d69b234272b823f02295",
".git/objects/05/3e319798b5f68f5f711c3d9a60d5a6a4932142": "3d1d05d137c73b5a9e7bd2231223b5c2",
".git/objects/05/a9058f513cce5faf1704e06e3c150688b0a01f": "e8d02f60cf87abd4c1de4b153dd696dc",
".git/objects/07/ffe1b1c7f35423e88451f2939630cec9231a68": "153a2240c374dfac8d60b2a8affa4f1a",
".git/objects/09/7c8de41111573b582175fc49c46c2d2338749c": "8dc5980e6434f450c5a880c348efdb55",
".git/objects/0b/785beb624ec738c4840833cb915b8895a2c94c": "b19f2097c0184aa0d4b3071e8e2c6915",
".git/objects/12/3b411442be0cfac921f1c108715b09257f2fc7": "dec565a42811f856de7ab06572918f36",
".git/objects/19/6de51a99b1fc2c19a80160d849b787e905bce9": "a8d0ddc75d36a426d7dd7319c5aa982a",
".git/objects/1b/98562c90a76713afa110fbd58f8243355acb86": "c4849c22f64b4b70221008c5c9364ca5",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/20/93e0f1a1f7605bdac79e180e2feef1e71c1ccd": "6a5a9d68b72124ff00f7e8dbabcbd2cb",
".git/objects/24/31b0c18488d436dd499a03eec679b16a3f9303": "f60b04137aab3d0554d28e5c550f92bf",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/27/a297abdda86a3cbc2d04f0036af1e62ae008c7": "51d74211c02d96c368704b99da4022d5",
".git/objects/2a/9d31149d5ab4528dffbbbf0bbfd896452eeb76": "4fab4397dc91527716d499a74183200c",
".git/objects/39/056ee7a3c2865f3d580e61175c471a74ef9212": "e2b1ecc882f90324e0d95dd17107f9cd",
".git/objects/3f/6172620fac91083fac9575de141688d636f745": "9519c2bc3d4d4b58679ce1ba1da1d5b3",
".git/objects/43/554f1bbae9ebe05363f2f9937335e2121cbf39": "44506548d991ef98caba2ee88f107c6b",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4a/95e935b00fb172d36d10e19f1090db3404e6a3": "d2cb1fc30ba34342ccbc57f1a5228147",
".git/objects/51/8915e1cadb1bfdb0a8784e766696b1a5996520": "a3617fad9f082eba0c74d245f31e910e",
".git/objects/59/fe5227c1950a2856251d4112698a54ec644bbd": "b0ef759ed7517f48b6c2323715d70423",
".git/objects/5e/5a6fe1f84ace7683d891271c45184a88a7d0f6": "0894ae640e5e4f82fa531646e5db4a96",
".git/objects/63/6931bcaa0ab4c3ff63c22d54be8c048340177b": "8cc9c6021cbd64a862e0e47758619fb7",
".git/objects/6d/5f0fdc7ccbdf7d01fc607eb818f81a0165627e": "2b2403c52cb620129b4bbc62f12abd57",
".git/objects/70/a5f2088bcad82fb2c5f17d35c745b05d8b4b62": "85fad6434b814934cc5b3fcb170d79a6",
".git/objects/73/7f149c855c9ccd61a5e24ce64783eaf921c709": "1d813736c393435d016c1bfc46a6a3a6",
".git/objects/76/be85a05b7912cf4560fe8c48cdfd2bc565c7e5": "a1b2af635fbb191e854f90572739297a",
".git/objects/77/0c6d6be916203e7a61e15238fa5198aa5aa8df": "6880a0ab85d768514d6cac24dcb116be",
".git/objects/77/3ae1e0edace33c8b000210feb9d852f515c9d0": "c62bd5786b20e7d31e14d14daaa99a4a",
".git/objects/7b/2178c23eaa82787e658d958882e67ef8c6a0df": "7fcdec3e3c4462a3f04d240ca16660b8",
".git/objects/7c/09d499f23e8c9cfadbd067e09e62b423cd8b4a": "4f5d6ea007527788d254cd3ceeb9b8a8",
".git/objects/84/7986e255f9fb666f3a632cf251e0223007049a": "4064938f6bf3e3ea57ae775c9778d746",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/85/e061a44bbfcd54e689dfe7c8c22c604bf66af4": "e540a004300e7dac2520537b995bf870",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/dea4461449690cad96154208a033e828e6f05f": "dd170bd85a8b88b40120771f7fd9af6a",
".git/objects/8b/74573480c2db86cf98421a575b0d2a9b3b0a32": "d487f2077bfd02e05c8200b49c01f136",
".git/objects/8c/59773bee8314a8ffb4431593d0fb49f52e34c6": "2eb993d30677573ffd0e58484cc6a514",
".git/objects/93/4f97f6e3ed1f95bb32a9e0688073bfdcb47ef8": "ff0fbc2a0c0b1ca3122ebed8429dec34",
".git/objects/93/6930a5ba9060e99756bea0ac2b6ea4bc0997c8": "cbed297bc469eebef90fad06eda76741",
".git/objects/96/c8266edef7005cc35fe1d919b07764813af04a": "61c0b1d97b9e7ff9296f8b59abc279f2",
".git/objects/96/d63aa04a4d18732f1acbea7e0748b2becec608": "f0b406a84c23c722cf9d99383dc77857",
".git/objects/97/8a4d89de1d1e20408919ec3f54f9bba275d66f": "dbaa9c6711faa6123b43ef2573bc1457",
".git/objects/a1/13cae85c966e2b464be4f4e62788975fd77a23": "a6c99339b15d82feb36e753c064a9f8e",
".git/objects/a3/28f4f15b5184fb0192a8d034db4cd4f62ffce6": "117f35c947420837849aa52585ec9c61",
".git/objects/aa/362c6d3f1b665f4d8ba37bb8a93317ea9142a5": "861cab7977c12fa6f8bdafbe627129ee",
".git/objects/ab/d1612bdb295954f53e32ec88e8b951c3bb99a2": "47434e606eff13545ec6d81d79b01975",
".git/objects/ad/5f004529b933d7c6e3be942c4721eb6b7846a9": "55278dcf2c2ea77d37efab08c1cd9ee5",
".git/objects/af/31ef4d98c006d9ada76f407195ad20570cc8e1": "a9d4d1360c77d67b4bb052383a3bdfd9",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b1/afd5429fbe3cc7a88b89f454006eb7b018849a": "e4c2e016668208ba57348269fcb46d7b",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/c3/e81f822689e3b8c05262eec63e4769e0dea74c": "8c6432dca0ea3fdc0d215dcc05d00a66",
".git/objects/c6/06caa16378473a4bb9e8807b6f43e69acf30ad": "ed187e1b169337b5fbbce611844136c6",
".git/objects/c6/0c4bd92d733ccfd1c03f71805d64d906c6bcd6": "ba3bc14e55c57da3894d5acbfee095de",
".git/objects/c7/7e53af75731b7a85ecd30d8156494811414dd5": "f0cf8f7ae9ddea5d2a44fec564c2f5ec",
".git/objects/ca/8482c88c44dcfdf9ead9d3726df9574ac9775c": "81cbf504c8b90bc81a07b514349a4ac5",
".git/objects/cb/bd4a916863ca1ddf90197c4c83493e238f52ff": "f844ee00de3149005ced5bebcf40c608",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/e1/9c4b7f31c7d8a67af83778db9fe4f83446a1ec": "07ab85e0ebd695a735bae7a2cf4ebd37",
".git/objects/e6/dfd662c67d7d1b8eacaaf316a464fe4bcc2680": "096feacfb60c619d4dd24f88f804a513",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/361605e9e785c47c62dd46a67f9c352731226b": "d1eafaea77b21719d7c450bcf18236d6",
".git/objects/ef/381c5c378bc058fa394d5f530f9a6405a8abd8": "6909db10adb07db5d772824b915bdf53",
".git/objects/ef/3c0e8eb35639ac2c347fba32b63faab932435f": "d4ca7b57f9b23fee3a2e61a6bf442707",
".git/objects/f0/531ead2b55c2e86ca3ab53baa45bbaa37febdf": "b5d1f6c909c3500014126b23cf25cd21",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f4/4bcab9ae18268e5207b674800c53a4655fda23": "066da64dd764b1aec4d9dac41a5e8803",
".git/objects/f4/cfa0dc8d55eee94ab1ff7954a0bfe15d2e9cd0": "f9789f9408595687873a01db4915abfb",
".git/objects/f5/c29530c14c85cb9fcb0697fdd3296343714e12": "3952a7df37d78222b10c0b6c2b7f6d4d",
".git/objects/fd/5ae45afd5da8915a00e860663f830ed0d8dc41": "db8f5224bf9b49b427aff6d71e9d9828",
".git/objects/fd/a31a9b0424ef94d107ee94842cd9ccc66ab0fc": "d9db0a6e1bff3e93dedda872c361572c",
".git/ORIG_HEAD": "f59662acafb0355429f0f2deb5c4d501",
".git/refs/heads/main": "f59662acafb0355429f0f2deb5c4d501",
".git/refs/remotes/origin/main": "f59662acafb0355429f0f2deb5c4d501",
"assets/AssetManifest.bin": "f85c604103fb915292a3188db6c34b75",
"assets/AssetManifest.bin.json": "3a1d4208dccb21681a3f4798cb087cf6",
"assets/AssetManifest.json": "a6aaac2d4ce6c6402ddc188931d3c1d6",
"assets/assets/papa_quiz.json": "8af37038be8508e7318f3aecfe60ccaf",
"assets/assets/quiz.json": "e3c0bce2987e8a5e347869cd08f887c2",
"assets/assets/quiz1.json": "8623338388a01c9a61b19b97cfa081f3",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"assets/NOTICES": "e9eeb8c88f651f55f5ead180df60d0f4",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"flutter_bootstrap.js": "5874299f58daaa0ac90969db650ebc03",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "850c7dcb7df58afc363d92e1408e9403",
"/": "850c7dcb7df58afc363d92e1408e9403",
"main.dart.js": "c736bb764fa7538a34edc0e127a034bc",
"manifest.json": "56abcd8496658ad926691f9819e194f4",
"version.json": "b8c8e3889897a74097e3a8e95e9b293d"};
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

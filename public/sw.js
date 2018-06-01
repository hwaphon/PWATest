/*
* @Author: hwaphon
* @Date:   2018-05-31 11:20:09
* @Last Modified by:   hwaphon
* @Last Modified time: 2018-05-31 14:36:47
*/


this.addEventListener('install', event => {
	event.waitUntil(
		caches.open('my-test-cache-v1').then(cache => {
			return cache.addAll([
				'./',
				'./index.html',
				'./index.css',
				'./assets/pwa.png'
			]);
		})
	)
});

this.addEventListener('fetch', event => {
	event.respondWith(
		caches.match(event.request).then(response => {
			if (response) {
				return response;
			}

			let request = event.request.clone();
			return fetch(request).then((httpRes) => {
				if (!httpRes || httpRes.status !== 200) {
					return httpRes;
				}

				let responseClone = httpRes.clone();
				caches.open('my-test-cache-v1').then((cache) => {
					cache.put(event.request, responseClone);
				});

				return httpRes;
			})
		})
	)
});

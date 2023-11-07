// The message you want to send.
let message = { greeting: "hello from background" };

chrome.action.onClicked.addListener((tab) => {
	chrome.tabs.sendMessage(tab.id, message, function(response) {
		console.log("Response from content script:", response);
		return true;
	});
	return true;
});

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
	var manifest = chrome.runtime.getManifest();
	var clientId = '1048857633719-63uqrvejdro0egadtb3krmgq2r7v7e70.apps.googleusercontent.com';
	var scopes = manifest.oauth2.scopes.join(' ');
	var redirectUri = chrome.identity.getRedirectURL('oauth2');
	
	if (message === 'login') {
		(async () => {
			let authUrl = 'https://accounts.google.com/o/oauth2/auth' +
				`?client_id=${encodeURIComponent(clientId)}` +
				'&response_type=id_token token' +
				'&redirect_uri=' + encodeURIComponent(redirectUri) +
				`&scope=${encodeURIComponent(scopes)}` +
				'&prompt=select_account';
			
			let authorizing = await chrome.identity.launchWebAuthFlow({
				'url': authUrl,
				'interactive':true
			})
			
			const id_token = extractIdToken(authorizing);
			console.log('id_token: ', id_token);
			
			sendResponse(id_token);
			return true;
		})();
		return true;
	}
	return true;
});

function extractIdToken(redirect_url) {
	let idToken = null;
	if (redirect_url.includes('id_token=')) {
		// URL 해시(#) 부분에서 id_token을 추출합니다.
		const params = new URLSearchParams(redirect_url.split('#')[1]);
		idToken = params.get('id_token');
	}
	return idToken;
}
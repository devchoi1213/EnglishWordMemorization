import React from "react";
const GoogleLoginBtn = chrome.runtime.getURL('images/google_login_button.svg');

function LoginButton({ onClick }) {
	
	return (
		<img src={GoogleLoginBtn} onClick={onClick} alt={'Login Button'}/>
	)
}

export default LoginButton;
import React from "react";
import { GoogleOAuthProvider } from '@react-oauth/google';
import { GoogleLogin } from '@react-oauth/google';

const GoogleLoginButton = () => {
	const clientId = '1048857633719-63uqrvejdro0egadtb3krmgq2r7v7e70.apps.googleusercontent.com'
	return (
		<>
			<GoogleOAuthProvider clientId={clientId} children={'test'}>
				<GoogleLogin
					onSuccess={credentialResponse => {
						console.log(credentialResponse);
					}}
					onError={() => {
						console.log('Login Failed');
					}}
				/>;
			</GoogleOAuthProvider>;
		</>
	)
}
export default GoogleLoginButton
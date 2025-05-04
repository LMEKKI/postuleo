import { FcGoogle } from "react-icons/fc";
import { FaLinkedin } from "react-icons/fa";
import { FaLock } from "react-icons/fa";

import "./loginPage.scss";

function LoginPage() {
	return (
		<div>
			<div className="container main " role="main">
				<hgroup>
					<h1>Connexion</h1>
					<p>Accédez à vos Candidatures</p>
				</hgroup>
				<form action="" role="form" className="form">
					<input
						placeholder="Votre email"
						type="email"
						autoComplete="username"
						name="login"
						required
						aria-label="login"
						aria-required="true"
						role="login"
					/>
					<input
						placeholder="Votre mot de passe"
						type="text"
						required
						aria-label="password"
						aria-required="true"
						autoComplete="current-password"
						name="password"
						role="password"
					/>

					<div className="login-option">
						<div className="div">
							<a className="primary" href="#">
								Mot de passe oublié ?
							</a>
						</div>
						<div className="login-options ">
							<label htmlFor="remember">
								<input
									type="checkbox"
									role="switch"
									name="remember"
									id="remember"
								/>
								Rester connecté
							</label>
						</div>
					</div>

					<input type="submit" value="Se connecter" aria-label="submit" />
					<hr className="hr-text" aria-hidden="true" role="separator"></hr>
					<div role="group" className="social-buttons">
						<button className="button secondary">
							<FcGoogle size={20} aria-hidden="true" />
							<span>Google</span>
						</button>
						<button className="button social-button" style={{}}>
							<FaLinkedin size={20} color="" aria-hidden="true" />
							<span>LinkedIn</span>
						</button>
					</div>
				</form>
			</div>
		</div>
	);
}

export default LoginPage;

/* eslint-disable react/jsx-no-target-blank */
import { Toolbar } from "@material-ui/core";
import React from "react";

export default function Footer() {
	return (
		<>
			<footer id="footer" className="footer mt-auto d-none">
				{/* <!-- Footer Top Section --> */}
				<div className="footer-top-section">
					<div className="container">
						<div className="row">
							<div className="col-xl-12">
								{/* <!-- Footer Rows Container --> */}
								<div className="footer-rows-container">
									{/* <!-- Left Side --> */}
									<div className="footer-rows-left">
										<div className="footer-row">
											<div className="footer-row-inner footer-logo">
												<a href="https://Upwork.net">
													<img src="https://Upwork.net/images/logo.png" alt="" />
												</a>
											</div>
										</div>
									</div>

									{/* <!-- Right Side --> */}
									<div className="footer-rows-right">
										{/* <!-- Social Icons --> */}
										<div className="footer-row">
											<div className="footer-row-inner">
												<ul className="footer-social-links">
													<li>
														<a
														
															target="_blank"
															data-tippy-placement="bottom"
															data-tippy-theme="light"
															data-tippy=""
															data-original-title="Facebook"
														>
															<i className="fab fa-facebook-f"></i>
														</a>
													</li>
													<li>
														<a target="_blank" data-tippy-placement="bottom" data-tippy-theme="light" data-tippy="" data-original-title="Twitter">
															<i className="fab fa-twitter"></i>
														</a>
													</li>

													<li>
														<a
														
															target="_blank"
															data-tippy-placement="bottom"
															data-tippy-theme="light"
															data-tippy=""
															data-original-title="LinkedIn"
														>
															<i className="fab fa-linkedin-in"></i>
														</a>
													</li>
												</ul>
												<div className="clearfix"></div>
											</div>
										</div>
									</div>
								</div>
								{/* <!-- Footer Rows Container / End --> */}
							</div>
						</div>
					</div>
				</div>
				{/* <!-- Footer Top Section / End --> */}

				{/* <!-- Footer Middle Section --> */}
				<div className="footer-middle-section">
					<div className="container">
						<div className="row">
							{/* <!-- Links --> */}
							<div className="col-xl col-lg col-md-3">
								<div className="footer-links">
									<h3>In-Demand Talent Categories</h3>
									<ul>
										<li>
											<a href="https://Upwork.net/sab-category/8">
												<span>interior design</span>
											</a>
										</li>

										<li>
											<a href="https://Upwork.net/sab-category/7">
												<span>IT</span>
											</a>
										</li>

										<li>
											<a href="https://Upwork.net/sab-category/6">
												<span>TEST</span>
											</a>
										</li>
									</ul>
								</div>
							</div>

							{/* <!-- Links --> */}
							<div className="col-xl col-lg col-md-3">
								<div className="footer-links">
									<h3>Upwork</h3>
									<ul>
										<li>
											<a href="https://Upwork.net/aboutus">
												<span>About Us</span>
											</a>
										</li>
										<li>
											<a href="https://Upwork.net/how">
												<span>How</span>
											</a>
										</li>
										<li>
											<a href="https://Upwork.net/knowledge-hubs">
												<span>Knowledge Hub</span>
											</a>
										</li>
										<li>
											<a href="https://Upwork.net/register">
												<span>Become a Employer</span>
											</a>
										</li>
										<li>
											<a href="https://Upwork.net/register">
												<span>Become a Freelancer</span>
											</a>
										</li>
									</ul>
								</div>
							</div>

							{/* <!-- Links --> */}
							<div className="col-xl col-lg col-md-3">
								<div className="footer-links">
									<h3>Helpful Links</h3>
									<ul>
										<li>
											<a href="https://Upwork.net/contact">
												<span>Contact Us</span>
											</a>
										</li>
										<li>
											<a href="https://Upwork.net/privacy-policy">
												<span>Privacy Policy</span>
											</a>
										</li>

										<li>
											<a href="https://Upwork.net/login">
												<span>Login</span>
											</a>
										</li>
									</ul>
								</div>
							</div>

							{/* <!-- Newsletter --> */}
							<div className="col-xl-3 col-lg-4 col-md-4">
								<h3>
									<i className="icon-feather-mail"></i> Sign Up For a Newsletter
								</h3>
								<p>Weekly breaking news, analysis and cutting edge advices on job searching.</p>
								<form action="https://Upwork.net/subscribe" method="POST" className="newsletter">
									<input type="hidden" name="_token" value="VQjVQ4QsSSeHhmUqvqFZgoVrnXUnrEmPoC6lcN97" />
									<input type="email" name="email" placeholder="Enter your email address" />
									<button type="submit">
										<i className="fas fa-arrow-right"></i>
									</button>
								</form>
							</div>
						</div>
					</div>
				</div>
				{/* <!-- Footer Middle Section / End --> */}

				{/* <!-- Footer Copyrights --> */}
				<div className="footer-bottom-section">
					<div className="container">
						<div className="row">
							<div className="col-xl-12">
								© 2021 <strong>Upwork</strong>. All Rights Reserved.
							</div>
						</div>
					</div>
				</div>
				{/* <!-- Footer Copyrights / End --> */}
			</footer>
			<Toolbar className="d-block d-md-none"></Toolbar>
		</>
	);
}

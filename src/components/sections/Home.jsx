import { RevealOnScroll } from "../RevealOnScroll";

export const Home = () => {
	return (
		<section
			id="home"
			className="min-h-screen flex items-center justify-center relative"
		>
			<RevealOnScroll>
				<div className="text-center z-10 px-4">
					<h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent leading-right">
						Eria Othieno Pinyi
					</h1>
					<p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto">
						A versatile software engineer and architect with over a decade of
						experience developing and maitaining digital solutions.
						<br />
						Leverages advanced knowledge of algorithms, data structures, design
						patterns, object-oriented principles, and domain-driven design to
						deliver robust software products.
						<br />
						Passionate about staying current with emerging trends in computer
						science and engineering.
					</p>
					<div className="flex justify-center space-x-4">
						<a
							href="#projects"
							className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)]"
						>
							View Projects
						</a>
						<a
							href="#contact"
							className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover:bg-blue-500/10"
						>
							Contect Me
						</a>
					</div>
				</div>
			</RevealOnScroll>
		</section>
	);
};

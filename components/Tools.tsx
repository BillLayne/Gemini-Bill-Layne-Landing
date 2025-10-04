import React from 'react';
import { Icon } from './common/Icon';

const ToolCard = ({ icon, title, description, link }: { icon: string, title:string, description: string, link: string }) => (
    <a href={link} className="block bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
        <div className="inline-block p-3 rounded-full mb-4 bg-blue-100 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
            <Icon name={icon} className="w-7 h-7 text-blue-600 group-hover:text-white transition-colors duration-300" />
        </div>
        <h3 className="text-xl font-bold text-gray-900">{title}</h3>
        <p className="mt-2 text-gray-600">{description}</p>
        <div className="mt-6 font-semibold text-blue-600 flex items-center">
            Use Tool <Icon name="arrowRight" className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
        </div>
    </a>
);


const Tools: React.FC = () => {
    return (
        <section id="tools" className="py-20 sm:py-24 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto">
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">Interactive Insurance Tools</h2>
                    <p className="mt-4 text-lg text-gray-600">Empower yourself with knowledge. Use our free calculators and quizzes to better understand your insurance needs and make informed decisions.</p>
                </div>
                <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    <ToolCard
                        icon="car"
                        title="Auto Coverage Checkup"
                        description="Analyze your current car insurance to identify potential gaps and ensure you're adequately protected on the road."
                        link="/auto-coverage-checkup.html"
                    />
                    <ToolCard
                        icon="home"
                        title="Home Insurance Evaluator"
                        description="Evaluate your homeowners policy to see if your coverage matches your property's value and your personal risks."
                        link="/home-insurance-evaluator.html"
                    />
                    <ToolCard
                        icon="quiz"
                        title="Insurance IQ Quiz"
                        description="Test your knowledge with our fun quiz. Learn important insurance concepts and become a smarter policyholder."
                        link="/insurance-quiz.html"
                    />
                     <ToolCard
                        icon="umbrella"
                        title="Umbrella Policy Calculator"
                        description="Determine if your assets are protected from major liability claims with our risk calculator."
                        link="/umbrella-policy-calculator.html"
                    />
                </div>
            </div>
        </section>
    );
};

export default Tools;
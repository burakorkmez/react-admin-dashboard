import { motion } from "framer-motion";
import { TrendingUp, Users, ShoppingBag, DollarSign } from "lucide-react";

const INSIGHTS = [
	{
		icon: TrendingUp,
		color: "text-green-500",
		insight: "Revenue is up 15% compared to last month, driven primarily by a successful email campaign.",
	},
	{
		icon: Users,
		color: "text-blue-500",
		insight: "Customer retention has improved by 8% following the launch of the new loyalty program.",
	},
	{
		icon: ShoppingBag,
		color: "text-purple-500",
		insight: 'Product category "Electronics" shows the highest growth potential based on recent market trends.',
	},
	{
		icon: DollarSign,
		color: "text-yellow-500",
		insight: "Optimizing pricing strategy could potentially increase overall profit margins by 5-7%.",
	},
];

const AIPoweredInsights = () => {
	return (
		<motion.div
			className='bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-lg shadow-lg rounded-xl p-6 border border-gray-700'
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 1.0 }}
		>
			<h2 className='text-xl font-semibold text-gray-100 mb-4'>AI-Powered Insights</h2>
			<div className='space-y-4'>
				{INSIGHTS.map((item, index) => (
					<div key={index} className='flex items-center space-x-3'>
						<div className={`p-2 rounded-full ${item.color} bg-opacity-20`}>
							<item.icon className={`size-6 ${item.color}`} />
						</div>
						<p className='text-gray-300'>{item.insight}</p>
					</div>
				))}
			</div>
		</motion.div>
	);
};
export default AIPoweredInsights;

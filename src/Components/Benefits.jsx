import { Truck, CreditCard, RotateCcw, Shield } from "lucide-react";
import { motion } from "framer-motion";

const benefits = [
  {
    icon: Truck,
    title: "Free Shipping",
    description: "Enjoy the convenience of free shipping on all orders over $50",
  },
  {
    icon: CreditCard,
    title: "Buy Now. Pay Later",
    description: "Shop now, pay later - access your favorite jewelry and pay in installments!",
  },
  {
    icon: RotateCcw,
    title: "Cashback Reward",
    description: "Earn cashback rewards on every purchase and enjoy savings on future jewelry!",
  },
  {
    icon: Shield,
    title: "Secure Payments",
    description: "Shop confidently with secure payments that protect your information!",
  },
];

export default function BenefitsSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-screen-2xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-center">
        {benefits.map((item, index) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={index}
              className="p-6 rounded-2xl hover:shadow-xl hover:scale-105 transition-all duration-300 bg-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Icon className="w-10 h-10 mx-auto mb-4 text-black" />
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-500 text-base">{item.description}</p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

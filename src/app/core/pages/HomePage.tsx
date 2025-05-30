import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Truck, BarChart3, Package, Users } from "lucide-react"

export default function HomePage() {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <header className="bg-white shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        <div className="flex items-center space-x-2">
                            <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                                <Truck className="w-6 h-6 text-white" />
                            </div>
                            <span className="text-xl font-bold text-gray-900">Cargo Calc</span>
                        </div>

                        <nav className="hidden md:flex space-x-8">
                            <a href="#" className="text-gray-900 font-medium">
                                Главная
                            </a>
                            <a href="#about" className="text-gray-500 hover:text-gray-900">
                                О Нас
                            </a>
                            <a href="#" className="text-gray-500 hover:text-gray-900">
                                Демо
                            </a>
                            <a href="#" className="text-gray-500 hover:text-gray-900">
                                Контакты
                            </a>
                        </nav>

                        <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                            Получить демо
                        </Button>
                    </div>
                </div>
            </header>

            {/* Hero Section */}
            <section className="py-20 lg:py-32">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-8">
                            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                                Автоматизация
                                <br />
                                таможенных складов
                            </h1>

                            <p className="text-lg text-gray-600 leading-relaxed">
                                Мы разработали удобное и мощное решение для автоматизации таможенных складов. Оно поможет упростить учет
                                грузов, управлять тарифами и вести прозрачный расчет услуг.
                            </p>

                            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg">
                                Попробовать сейчас
                            </Button>
                        </div>

                        <div className="relative">
                            <div className="bg-white rounded-2xl shadow-2xl p-6 transform rotate-1">
                                <Image
                                    src="/dashboard-preview.jpg"
                                    alt="Dashboard Preview"
                                    width={600}
                                    height={400}
                                    className="w-full h-auto rounded-lg"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </div>
    )
}

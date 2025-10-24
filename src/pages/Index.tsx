import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';
import { Badge } from '@/components/ui/badge';
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from 'recharts';

const COLORS = ['#6366F1', '#8B5CF6', '#D946EF', '#EF4444', '#10B981'];

const leadsData = [
  { name: 'Пн', leads: 24 },
  { name: 'Вт', leads: 38 },
  { name: 'Ср', leads: 29 },
  { name: 'Чт', leads: 45 },
  { name: 'Пт', leads: 52 },
  { name: 'Сб', leads: 31 },
  { name: 'Вс', leads: 18 },
];

const productsData = [
  { name: 'Форма заявки', value: 45 },
  { name: 'Калькулятор', value: 28 },
  { name: 'Подписка', value: 18 },
  { name: 'Обратный звонок', value: 12 },
];

const mockProducts = [
  { id: 1, name: 'Форма заявки на расчет', leads: 127, views: 1542, conversion: 8.2 },
  { id: 2, name: 'Калькулятор стоимости', leads: 89, views: 1023, conversion: 8.7 },
  { id: 3, name: 'Форма обратной связи', leads: 54, views: 876, conversion: 6.2 },
];

export default function Index() {
  const [activeTab, setActiveTab] = useState('landing');

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-blue-50">
      <nav className="border-b bg-white/80 backdrop-blur-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-lg gradient-primary flex items-center justify-center">
                <Icon name="Grid3x3" className="text-white" size={24} />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                FormBuilder
              </span>
            </div>
            <Button className="gradient-primary text-white hover:opacity-90">
              <Icon name="User" size={18} className="mr-2" />
              Личный кабинет
            </Button>
          </div>
        </div>
      </nav>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <div className="border-b bg-white/60 backdrop-blur-sm">
          <div className="container mx-auto px-4">
            <TabsList className="bg-transparent h-14">
              <TabsTrigger value="landing" className="data-[state=active]:bg-white">
                <Icon name="Home" size={18} className="mr-2" />
                Главная
              </TabsTrigger>
              <TabsTrigger value="dashboard" className="data-[state=active]:bg-white">
                <Icon name="LayoutDashboard" size={18} className="mr-2" />
                Дашборд
              </TabsTrigger>
              <TabsTrigger value="products" className="data-[state=active]:bg-white">
                <Icon name="Box" size={18} className="mr-2" />
                Мои продукты
              </TabsTrigger>
            </TabsList>
          </div>
        </div>

        <div className="container mx-auto px-4 py-8">
          <TabsContent value="landing" className="mt-0 animate-fade-in">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-16 pt-12">
                <Badge className="mb-4 gradient-primary text-white border-0">
                  Платформа нового поколения
                </Badge>
                <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Создавайте формы.<br />Собирайте заявки.<br />Растите бизнес.
                </h1>
                <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Конструктор форм и виджетов с аналитикой. Без программирования. 
                  Интеграция за 30 секунд.
                </p>
                <div className="flex gap-4 justify-center">
                  <Button size="lg" className="gradient-primary text-white hover:opacity-90" onClick={() => setActiveTab('dashboard')}>
                    <Icon name="Rocket" size={20} className="mr-2" />
                    Начать бесплатно
                  </Button>
                  <Button size="lg" variant="outline">
                    <Icon name="Play" size={20} className="mr-2" />
                    Посмотреть демо
                  </Button>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mb-16">
                <Card className="border-2 hover:border-primary/50 transition-all hover:shadow-xl">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center mb-4">
                      <Icon name="MousePointerClick" className="text-white" size={24} />
                    </div>
                    <CardTitle>Drag & Drop конструктор</CardTitle>
                    <CardDescription>
                      Создавайте формы любой сложности без единой строчки кода
                    </CardDescription>
                  </CardHeader>
                </Card>

                <Card className="border-2 hover:border-primary/50 transition-all hover:shadow-xl">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center mb-4">
                      <Icon name="BarChart3" className="text-white" size={24} />
                    </div>
                    <CardTitle>Умная аналитика</CardTitle>
                    <CardDescription>
                      Отслеживайте конверсию, источники трафика и поведение пользователей
                    </CardDescription>
                  </CardHeader>
                </Card>

                <Card className="border-2 hover:border-primary/50 transition-all hover:shadow-xl">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center mb-4">
                      <Icon name="Download" className="text-white" size={24} />
                    </div>
                    <CardTitle>Экспорт данных</CardTitle>
                    <CardDescription>
                      Выгружайте заявки в Excel с гибкими фильтрами и сортировкой
                    </CardDescription>
                  </CardHeader>
                </Card>
              </div>

              <Card className="border-2 p-8 text-center bg-gradient-to-br from-indigo-50 to-purple-50">
                <h3 className="text-2xl font-bold mb-4">Готовы начать?</h3>
                <p className="text-muted-foreground mb-6">
                  Присоединяйтесь к 10,000+ компаний, которые уже используют FormBuilder
                </p>
                <Button size="lg" className="gradient-primary text-white hover:opacity-90" onClick={() => setActiveTab('dashboard')}>
                  Создать первую форму
                  <Icon name="ArrowRight" size={20} className="ml-2" />
                </Button>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="dashboard" className="mt-0 animate-fade-in">
            <div className="mb-8">
              <h2 className="text-3xl font-bold mb-2">Дашборд</h2>
              <p className="text-muted-foreground">Общая статистика по всем продуктам</p>
            </div>

            <div className="grid md:grid-cols-4 gap-6 mb-8">
              <Card className="border-2 hover:shadow-lg transition-all">
                <CardHeader className="pb-2">
                  <CardDescription>Всего заявок</CardDescription>
                  <CardTitle className="text-3xl">486</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-2 text-sm">
                    <Badge variant="outline" className="text-green-600 border-green-600">
                      <Icon name="TrendingUp" size={12} className="mr-1" />
                      +12.5%
                    </Badge>
                    <span className="text-muted-foreground">за неделю</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 hover:shadow-lg transition-all">
                <CardHeader className="pb-2">
                  <CardDescription>Просмотры</CardDescription>
                  <CardTitle className="text-3xl">3,534</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-2 text-sm">
                    <Badge variant="outline" className="text-green-600 border-green-600">
                      <Icon name="TrendingUp" size={12} className="mr-1" />
                      +8.3%
                    </Badge>
                    <span className="text-muted-foreground">за неделю</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 hover:shadow-lg transition-all">
                <CardHeader className="pb-2">
                  <CardDescription>Конверсия</CardDescription>
                  <CardTitle className="text-3xl">13.7%</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-2 text-sm">
                    <Badge variant="outline" className="text-green-600 border-green-600">
                      <Icon name="TrendingUp" size={12} className="mr-1" />
                      +2.1%
                    </Badge>
                    <span className="text-muted-foreground">за неделю</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 hover:shadow-lg transition-all">
                <CardHeader className="pb-2">
                  <CardDescription>Продуктов</CardDescription>
                  <CardTitle className="text-3xl">12</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-2 text-sm">
                    <Badge variant="outline" className="text-blue-600 border-blue-600">
                      <Icon name="Zap" size={12} className="mr-1" />
                      3 активных
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <Card className="border-2">
                <CardHeader>
                  <CardTitle>Динамика заявок</CardTitle>
                  <CardDescription>Заявки за последние 7 дней</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={leadsData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                      <XAxis dataKey="name" stroke="#6b7280" />
                      <YAxis stroke="#6b7280" />
                      <Tooltip />
                      <Line type="monotone" dataKey="leads" stroke="#6366F1" strokeWidth={3} dot={{ fill: '#6366F1', r: 5 }} />
                    </LineChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardHeader>
                  <CardTitle>Распределение по продуктам</CardTitle>
                  <CardDescription>Заявки по типу форм</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                      <Pie
                        data={productsData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                        outerRadius={100}
                        fill="#8884d8"
                        dataKey="value"
                      >
                        {productsData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </div>

            <Card className="border-2">
              <CardHeader>
                <CardTitle>Последние заявки</CardTitle>
                <CardDescription>Недавно полученные обращения</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div key={i} className="flex items-center justify-between p-4 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full gradient-primary flex items-center justify-center text-white font-semibold">
                          {String.fromCharCode(64 + i)}
                        </div>
                        <div>
                          <p className="font-semibold">Иван Петров</p>
                          <p className="text-sm text-muted-foreground">ivan.petrov@example.com</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <Badge className="mb-1">Форма заявки</Badge>
                        <p className="text-sm text-muted-foreground">2 часа назад</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="products" className="mt-0 animate-fade-in">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-3xl font-bold mb-2">Мои продукты</h2>
                <p className="text-muted-foreground">Управление формами и виджетами</p>
              </div>
              <Button className="gradient-primary text-white hover:opacity-90">
                <Icon name="Plus" size={20} className="mr-2" />
                Создать продукт
              </Button>
            </div>

            <div className="grid gap-6">
              {mockProducts.map((product) => (
                <Card key={product.id} className="border-2 hover:border-primary/50 hover:shadow-xl transition-all">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center">
                          <Icon name="FileText" className="text-white" size={24} />
                        </div>
                        <div>
                          <CardTitle className="mb-1">{product.name}</CardTitle>
                          <CardDescription>ID: {product.id} • Создан 15 окт 2024</CardDescription>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          <Icon name="BarChart" size={16} className="mr-2" />
                          Аналитика
                        </Button>
                        <Button variant="outline" size="sm">
                          <Icon name="Settings" size={16} className="mr-2" />
                          Настроить
                        </Button>
                        <Button variant="outline" size="sm">
                          <Icon name="Code" size={16} />
                        </Button>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-4 gap-6">
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">Заявки</p>
                        <p className="text-2xl font-bold">{product.leads}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">Просмотры</p>
                        <p className="text-2xl font-bold">{product.views}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">Конверсия</p>
                        <p className="text-2xl font-bold">{product.conversion}%</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">Статус</p>
                        <Badge className="bg-green-100 text-green-700 hover:bg-green-100">
                          <Icon name="CheckCircle2" size={14} className="mr-1" />
                          Активен
                        </Badge>
                      </div>
                    </div>
                    <div className="mt-4 h-20">
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={leadsData.slice(0, 7)}>
                          <Bar dataKey="leads" fill="#6366F1" radius={[4, 4, 0, 0]} />
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="mt-8 border-2 border-dashed hover:border-primary transition-colors cursor-pointer">
              <CardContent className="flex flex-col items-center justify-center py-12">
                <div className="w-16 h-16 rounded-full gradient-primary/10 flex items-center justify-center mb-4">
                  <Icon name="Plus" size={32} className="text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Создать новый продукт</h3>
                <p className="text-muted-foreground mb-4">Добавьте форму или виджет для вашего сайта</p>
                <Button className="gradient-primary text-white hover:opacity-90">
                  Начать создание
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
        </div>
      </Tabs>
    </div>
  );
}

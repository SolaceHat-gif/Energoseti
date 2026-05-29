import React, { useState } from 'react';
import { X, User, Mail, Lock, Bolt } from 'lucide-react';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose }) => {
  const [mode, setMode] = useState<'login' | 'register'>('register');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  if (!isOpen) return null;

  const resetForm = () => {
    setName('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    setError('');
    setSuccess('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (mode === 'register') {
      if (!name.trim()) {
        setError('Пожалуйста, укажите имя.');
        return;
      }
      if (!email.includes('@')) {
        setError('Введите корректный адрес электронной почты.');
        return;
      }
      if (password.length < 6) {
        setError('Пароль должен содержать не менее 6 символов.');
        return;
      }
      if (password !== confirmPassword) {
        setError('Пароли не совпадают.');
        return;
      }
      setSuccess(`Здравствуйте, ${name}! Регистрация в личном кабинете прошла успешно.`);
    } else {
      if (!email.includes('@') || password.length < 6) {
        setError('Неверный логин или пароль.');
        return;
      }
      setSuccess('Вход выполнен успешно. Добро пожаловать!');
    }
  };

  const switchMode = (newMode: 'login' | 'register') => {
    resetForm();
    setMode(newMode);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      {/* Modal */}
      <div className="relative bg-white rounded-xl shadow-2xl w-full max-w-md overflow-hidden animate-[fadeIn_0.2s_ease-out]">
        {/* Header */}
        <div className="bg-[#004b87] px-6 py-5 flex items-center justify-between">
          <div className="flex items-center space-x-2 text-white">
            <Bolt className="w-6 h-6 text-[#f07c00]" />
            <span className="font-bold text-lg">Личный кабинет</span>
          </div>
          <button onClick={onClose} className="text-white/80 hover:text-white transition">
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-gray-200">
          <button
            onClick={() => switchMode('register')}
            className={`flex-1 py-3 font-semibold transition ${
              mode === 'register'
                ? 'text-[#004b87] border-b-2 border-[#004b87]'
                : 'text-gray-400 hover:text-gray-600'
            }`}
          >
            Регистрация
          </button>
          <button
            onClick={() => switchMode('login')}
            className={`flex-1 py-3 font-semibold transition ${
              mode === 'login'
                ? 'text-[#004b87] border-b-2 border-[#004b87]'
                : 'text-gray-400 hover:text-gray-600'
            }`}
          >
            Вход
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          {mode === 'register' && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Имя</label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Иван Иванов"
                  className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#004b87] focus:border-transparent outline-none transition"
                />
              </div>
            </div>
          )}

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Электронная почта</label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="example@mail.ru"
                className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#004b87] focus:border-transparent outline-none transition"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Пароль</label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#004b87] focus:border-transparent outline-none transition"
              />
            </div>
          </div>

          {mode === 'register' && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Подтверждение пароля</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#004b87] focus:border-transparent outline-none transition"
                />
              </div>
            </div>
          )}

          {error && (
            <div className="bg-red-50 text-red-600 text-sm px-4 py-2.5 rounded-lg border border-red-100">
              {error}
            </div>
          )}
          {success && (
            <div className="bg-green-50 text-green-700 text-sm px-4 py-2.5 rounded-lg border border-green-100">
              {success}
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-[#f07c00] hover:bg-[#d66e00] text-white font-semibold py-3 rounded-lg transition"
          >
            {mode === 'register' ? 'Зарегистрироваться' : 'Войти'}
          </button>

          <p className="text-center text-sm text-gray-500">
            {mode === 'register' ? (
              <>
                Уже есть аккаунт?{' '}
                <button type="button" onClick={() => switchMode('login')} className="text-[#004b87] font-semibold hover:underline">
                  Войти
                </button>
              </>
            ) : (
              <>
                Нет аккаунта?{' '}
                <button type="button" onClick={() => switchMode('register')} className="text-[#004b87] font-semibold hover:underline">
                  Зарегистрироваться
                </button>
              </>
            )}
          </p>
        </form>
      </div>
    </div>
  );
};

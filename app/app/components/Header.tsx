// components/Header.tsx
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className="bg-blue-500 text-white py-4">
      <div className="container mx-auto flex items-center justify-between">
        <h1 className="text-2xl font-semibold"><Link href={"/employees"}>Attendance Management System </Link></h1>
        <nav>
          <Link href="/admin">
             Dashboard
          </Link>
          {/* Add more navigation links or user profile section as needed */}
        </nav>
      </div>
    </header>
  );
};

export default Header;

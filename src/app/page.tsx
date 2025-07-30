import GeoInfo from '@/components/GeoInfo';
import { Shield, Globe, Lock, Zap } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-8 py-12">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <div className="p-3 bg-blue-600 rounded-full">
              <Shield className="w-8 h-8 text-white" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Geo-Blocking
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            แอปพลิเคชันนี้แสดงการบล็อก IP ตามตำแหน่งทางภูมิศาสตร์โดยใช้ Vercel Edge Middleware
          </p>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <Globe className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">ตรวจจับตำแหน่งที่ตั้งอัตโนมัติ</h3>
            <p className="text-gray-600">
              ระบบสามารถตรวจจับตำแหน่งของผู้เยี่ยมชมโดยอัตโนมัติ ด้วยข้อมูลจาก Vercel
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <Lock className="w-12 h-12 text-red-600 mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">การบล็อกอัจฉริยะ</h3>
            <p className="text-gray-600">
              สามารถตั้งค่าบล็อกหรืออนุญาตการเข้าถึงจากประเทศต่างๆ ได้อย่างยืดหยุ่น
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <Zap className="w-12 h-12 text-yellow-600 mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">ประสิทธิภาพที่ขอบเครือข่าย</h3>
            <p className="text-gray-600">
              บล็อกการเข้าถึงได้อย่างรวดเร็วตั้งแต่ขอบเครือข่าย ก่อนที่คำขอจะไปถึงเซิร์ฟเวอร์ของคุณ
            </p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <GeoInfo />
        </div>

        <div className="max-w-4xl mx-auto mt-12">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              วิธีการทำงาน
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Edge Middleware
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• ทำงานที่ตำแหน่ง Edge ของ Vercel</li>
                  <li>• ดักจับคำร้องขอก่อนที่จะไปถึงแอป</li>
                  <li>• ไม่มีการหน่วงเวลาในการเริ่มต้น</li>
                  <li>• เข้าถึงข้อมูลตำแหน่งทางภูมิศาสตร์ทั่วโลก</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  ตัวเลือกการกำหนดค่า
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• โหมด Blacklist/Whitelist</li>
                  <li>• การบล็อกตามประเทศ</li>
                  <li>• หน้าสำหรับเปลี่ยนเส้นทางที่กำหนดเองได้</li>
                  <li>• บันทึกการเข้าถึงอย่างละเอียด</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

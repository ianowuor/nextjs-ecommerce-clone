/* src/app/account/page.tsx */
import Breadcrumb from "@/components/common/Breadcrumbs";

export default function AccountPage() {
  return (
    <div className="max-w-[1170px] mx-auto px-4 xl:px-0 mb-[140px]">
      <div className="flex justify-between items-center">
        <Breadcrumb items={[{ label: "My Account", href: "/account" }]} />
        <p className="text-[14px]">Welcome! <span className="text-[#DB4444]">Md Rimel</span></p>
      </div>

      <div className="flex flex-col lg:flex-row gap-[100px] mt-4">
        
        {/* Left Sidebar */}
        <div className="w-full lg:w-[270px] flex flex-col gap-6">
          <div>
            <h3 className="font-medium text-[16px] mb-4">Manage My Account</h3>
            <ul className="flex flex-col gap-2 ml-8 text-[16px] opacity-50">
              <li className="text-[#DB4444] opacity-100 cursor-pointer">My Profile</li>
              <li className="hover:text-[#DB4444] cursor-pointer transition-colors">Address Book</li>
              <li className="hover:text-[#DB4444] cursor-pointer transition-colors">My Payment Options</li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-[16px] mb-4">My Orders</h3>
            <ul className="flex flex-col gap-2 ml-8 text-[16px] opacity-50">
              <li className="hover:text-[#DB4444] cursor-pointer transition-colors">My Returns</li>
              <li className="hover:text-[#DB4444] cursor-pointer transition-colors">My Cancellations</li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-[16px]">My Wishlist</h3>
          </div>
        </div>

        {/* Right Content: Edit Profile Form */}
        <div className="flex-grow shadow-lg rounded-[4px] p-[40px] md:px-[80px] md:py-[40px]">
          <h2 className="text-[#DB4444] text-[20px] font-medium mb-4">Edit Your Profile</h2>
          
          <form className="flex flex-col gap-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-[50px] gap-y-6">
              <div className="flex flex-col gap-2">
                <label className="text-[16px]">First Name</label>
                <input type="text" placeholder="Md" className="bg-[#F5F5F5] h-[50px] px-4 rounded-[4px] outline-none" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[16px]">Last Name</label>
                <input type="text" placeholder="Rimel" className="bg-[#F5F5F5] h-[50px] px-4 rounded-[4px] outline-none" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[16px]">Email</label>
                <input type="email" placeholder="rimel1111@gmail.com" className="bg-[#F5F5F5] h-[50px] px-4 rounded-[4px] outline-none" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[16px]">Address</label>
                <input type="text" placeholder="Kingston, 5236, United State" className="bg-[#F5F5F5] h-[50px] px-4 rounded-[4px] outline-none" />
              </div>
            </div>

            <div className="flex flex-col gap-4 mt-2">
              <label className="text-[16px]">Password Changes</label>
              <input type="password" placeholder="Current Password" className="bg-[#F5F5F5] h-[50px] px-4 rounded-[4px] outline-none" />
              <input type="password" placeholder="New Password" className="bg-[#F5F5F5] h-[50px] px-4 rounded-[4px] outline-none" />
              <input type="password" placeholder="Confirm New Password" className="bg-[#F5F5F5] h-[50px] px-4 rounded-[4px] outline-none" />
            </div>

            <div className="flex justify-end items-center gap-8 mt-4">
              <button type="button" className="text-black hover:text-[#DB4444]">Cancel</button>
              <button type="submit" className="bg-[#DB4444] text-white px-[48px] py-[16px] rounded-[4px] font-medium hover:bg-[#c23b3b] transition-colors">
                Save Changes
              </button>
            </div>
          </form>
        </div>

      </div>
    </div>
  );
}
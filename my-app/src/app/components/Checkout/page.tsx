import { Label } from "@/components/ui/label"
import Link from "next/link";
import { Input } from "@/components/ui/input"
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from "@/components/ui/select";
import Image from "next/image";


const Checkout = () => {
  
  return (
    <div className='sm:w-full sm:h-auto md:w-[1440px] md:h-auto xl:w-full  lg:w-[1940px]'>
     
      <Image 
      src="/images/Check1.png"
        className=" pointer-events-none object-cover h-auto w-full"
        alt="banner"
        width={1440}
        height={316}
      />

      
      <div className='flex md:flex-row flex-col gap-6 max-w-[1240px] mx-auto mt-[63px]'>

       
        <div className="max-w-[608px] w-full mx-auto px-4 sm:px-[75px] md:px-4 lg:px-[75px] py-9">
          <h1 className="text-4xl font-semibold">Billing Details</h1>

          <form className="space-y-6 mt-9">
            
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="first-name">First Name</Label>
            <Input id="first-name" type="text" placeholder="Enter your first name" className='bg-transparent border border-[#9F9F9F] rounded-[10px] placeholder:text-[#9F9F9F] py-5' />
          </div>
          <div>
            <Label htmlFor="last-name">Last Name</Label>
            <Input id="last-name" type="text" placeholder="Enter your last name" className='bg-transparent border border-[#9F9F9F] rounded-[10px] placeholder:text-[#9F9F9F] py-5' />
          </div>
        </div>

       
        <div>
          <Label htmlFor="company-name">Company Name (Optional)</Label>
          <Input id="company-name" type="text" placeholder="Enter your company name" className='bg-transparent border border-[#9F9F9F] rounded-[10px] placeholder:text-[#9F9F9F] py-5' />
        </div>

        
        <div>
          <Label htmlFor="country">Country / Region</Label>
          <Select>
            <SelectTrigger id="country" className="border border-[#9F9F9F] rounded-[10px] py-5">
              <SelectValue placeholder="Select country" className='placeholder:text-[#9F9F9F]' />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="sri-lanka">Sri Lanka</SelectItem>
              <SelectItem value="pakistan">Pakistan</SelectItem>
              <SelectItem value="india">India</SelectItem>
            </SelectContent>
          </Select>
        </div>

 
 <div>
          <Label htmlFor="street-address">Street Address</Label>
          <Input id="street-address" type="text" placeholder="Enter your street address" className='bg-transparent border border-[#9F9F9F] rounded-[10px] placeholder:text-[#9F9F9F] py-5' />
        </div>

       
        <div>
          <Label htmlFor="city">Town / City</Label>
          <Input id="city" type="text" placeholder="Enter your town or city" className='bg-transparent border border-[#9F9F9F] rounded-[10px] placeholder:text-[#9F9F9F] py-5' />
        </div>
        
        <div>
          <Label htmlFor="city">Province</Label>
          <Input id="city" type="text" placeholder="Enter your town or city" className='bg-transparent border border-[#9F9F9F] rounded-[10px] placeholder:text-[#9F9F9F] py-5' />
        </div>
       
        <div>
          <Label htmlFor="code">ZIP code</Label>
          <Input id="code" type="text" placeholder="Enter your town or city" className='bg-transparent border border-[#9F9F9F] rounded-[10px] placeholder:text-[#9F9F9F] py-5' />
        </div>
       
        <div>
          <Label htmlFor="phone">Phone</Label>
          <Input id="phone" type="number" placeholder="Enter your town or city" className='bg-transparent border border-[#9F9F9F] rounded-[10px] placeholder:text-[#9F9F9F] py-5' />
        </div>
       
        <div>
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="text" placeholder="Enter your town  or city" className='bg-transparent border border-[#9F9F9F] rounded-[10px] placeholder:text-[#9F9F9F] py-5' />
          <Input id="email" type="text" placeholder="Enter your town or city" className='bg-transparent border border-[#9F9F9F] rounded-[10px] placeholder:text-[#9F9F9F] py-5 mt-2' />
        </div>
      </form>
    </div>

        <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg flex-1">


  
  <div className="flex justify-between mb-4">
  <h2 className="text-2xl font-semibold mb-4">Product</h2>
  <h2 className="text-2xl font-semibold mb-4">Subtotal</h2>
  </div>
  <div className="flex justify-between mb-4">
    <span className="font-medium text-[#9F9F9F]">Asgaard sofa * 1</span>
    <span className="font-medium">Rs. 250,000.00</span>
  </div>
  <div className="flex justify-between mb-4">
    <span className="font-medium">Subtotal</span>
    <span className="font-medium">Rs. 250,000.00</span>
  </div>
  <div className="flex justify-between mb-6">
    <span className="font-medium">Total</span>
    <span className=" text-xl text-[#B88E2F] font-semibold">Rs. 250,000.00</span>
  </div>
  <hr />

 
  <div className="mb-6 mt-2">
    <div className='flex gap-2 items-center'>
        <span className='bg-black h-3 w-3 rounded-full'></span>
    <span className="font-medium mb-2">Direct Bank Transfer</span>
    </div>
    <p className='text-[#9F9F9F]'>Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.</p>
    <div className='flex items-center gap-2 text-[#9F9F9F]'>
    <Input type="radio" name="payment-method" className="w-min"/>
      <span>Direct Bank Transfer</span>
    </div>
    <div className='flex items-center gap-2 text-[#9F9F9F]'>

      <Input type="radio" name="payment-method" className="w-min"/>
      <span> Cash On Delivery</span>
      </div>
     
    <p className="text-sm text-gray-500 mt-2">Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our <span className='font-semibold'>privacy policy</span>.</p>
  </div>

  

  
  <div className='flex justify-center items-center'>

  <Link href="/components/Contact">
  <button className="w-[318px] h-[64px] bg-white text-black border border-[#000000]  font-semibold rounded-[15px] ">
    Place order
    </button>
  </Link>
     </div>
</div>
</div>
</div>

  )
}
export default Checkout






























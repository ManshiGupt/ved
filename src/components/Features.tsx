import Image from 'next/image';

const Features = () => {
  return (
    <div className="bg-green-50 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex-1">
            <Image 
              src="/slide5.jpg" // replace with the correct image path
              alt="Shopping"
              width={500}
              height={500}
              className="object-cover"
            />
          </div>
          <div className="flex-1 mt-4 md:mt-0">
            <h2 className="text-2xl font-semibold mb-2">Smarter way to know tradition</h2>
            <p className="text-gray-600 mb-4">Buy now, pay later for all spends once a month</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
              <div className="flex items-center">
                <span className="material-icons mr-2">event</span>
                <p>Buy now, pay after 30 days</p>
              </div>
              <div className="flex items-center">
                <span className="material-icons mr-2">apps</span>
                <p>Shop across 20,000 apps</p>
              </div>
              <div className="flex items-center">
                <span className="material-icons mr-2">account_balance_wallet</span>
                <p>Credit limit upto ₹100,000</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8">
          <h3 className="text-xl font-semibold mb-4">Pandit around the world</h3>
          {/* <p className="text-gray-600 mb-6">Effective insurances for all your risks</p> */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded-md shadow-md">
              <h4 className="font-semibold mb-2">Ride insurance for all your trips</h4>
              <Image 
                src="/test1.jpeg" // replace with the correct image path
                alt="Ride Insurance"
                width={100}
                height={100}
              />
            </div>
            <div className="bg-white p-4 rounded-md shadow-md">
              <h4 className="font-semibold mb-2">Insure your daily assets</h4>
              <Image 
                src="/test2.jpeg" // replace with the correct image path
                alt="Daily Assets"
                width={100}
                height={100}
              />
            </div>
            <div className="bg-white p-4 rounded-md shadow-md">
              <h4 className="font-semibold mb-2">Daily Hospicash, Super top up</h4>
              <Image 
                src="/slide2.jpeg" // replace with the correct image path
                alt="Hospicash"
                width={100}
                height={100}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;

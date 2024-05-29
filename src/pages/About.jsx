
export default function About() {
  return (
    <div>
        <div className="hero">
            <div className="hero-content gap-12 flex-col lg:flex-row-reverse">
                <img src="https://i.ibb.co/Z1TchfP/img5.jpg" className="flex-1 md:w-[600px]" />
                <div className="flex-1 md:px-10 ">
                  <h1 className=" text-xl md:text-2xl text-violet-600 font-bold ">About Us</h1>
                  <p className="py-6">DaisyMart is your ultimate destination for finding fashion and beauty that perfectly reflects who you are. Our mission is to empower you to express your individuality and confidence through our curated selection of the latest trends and timeless classics.</p>
                  <p className="py-6">At DaisyMart, we believe that fashion is more than just clothing—it's a form of self-expression. Whether you're looking to revamp your wardrobe, find the perfect outfit for a special occasion, or simply stay updated with the latest styles, we've got you covered.</p>
                </div>
            </div>
        </div>

        <div className=" hero-content p-12 mx-auto flex flex-col md:flex-row gap-12 ">
            <div className="space-y-4">
                <h4 className="text-xl font-semibold text-violet-600">Our Values</h4>
                    <ul>
                        <li><strong>Inclusivity:</strong> We celebrate diversity and offer a wide range of sizes, styles, and brands to ensure everyone can find their perfect look.</li>
                        <li><strong>Quality:</strong> We partner with top designers and brands to bring you high-quality, durable, and stylish pieces that you'll love and cherish.</li>
                        <li><strong>Sustainability:</strong> We are committed to promoting sustainable fashion by offering eco-friendly and ethically-produced products.</li>
                        <li><strong>Customer Satisfaction:</strong> Your happiness is our top priority. Our dedicated customer service team is here to provide personalized assistance and ensure a seamless shopping experience.</li>
                    </ul>
            </div>
            
            <div className="space-y-4">
            <h4 className="text-xl font-semibold text-violet-600">Our Services</h4>
                <ul>
                    <li><strong>Personalized Styling:</strong> Take advantage of our expert stylists who are ready to help you create outfits that match your personality and lifestyle.</li>
                    <li><strong>Trend Updates:</strong> Stay ahead of the fashion curve with our regularly updated collection of the latest trends and style guides.</li>
                    <li><strong>Community Engagement:</strong> Join our vibrant community of fashion enthusiasts. Share your looks, get inspiration, and connect with like-minded individuals.</li>
                    <li><strong>Easy Shopping Experience:</strong> Enjoy a hassle-free shopping experience with our user-friendly website, easy returns, and fast shipping.</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

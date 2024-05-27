import { Link } from "react-router-dom";

export default function Banner() {
  return (
    <div>
        <div className="hero">
            <div className="hero-content gap-12 flex-col lg:flex-row-reverse">
                <img src="https://i.ibb.co/M9BF3pV/img1.jpg" className="flex-1 md:w-[600px]" />
                <div className="flex-1 md:px-10 ">
                  <h1 className=" text-3xl md:text-4xl text-violet-600 font-bold ">Discover Your Perfect <br /> Look Today!</h1>
                  <p className="py-6">Whether you're seeking the latest trends or timeless classics, our diverse selection ensures you'll find something to suit your unique style. Shop now and transform your wardrobe with our high-quality, affordable fashion pieces.</p>
                  <Link to={'/about'}><button className="btn btn-primary">Learn More</button></Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default function Footer() {
  return (
    <footer className="w-full bg-white text-gray-700 pt-12 pb-4">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* TOP */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

          {/* LEFT */}
          <div>
            <img src="/logo.png" alt="logo" className="w-32 mb-4" />

            <p className="text-sm leading-relaxed">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </p>

            <div className="mt-4 flex items-center gap-2">
              <img src="/google.png" alt="Google Badge" className="h-10" />
              <span className="text-green-600 font-semibold text-lg">100</span>
            </div>
          </div>

          {/* LINKS */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Links</h3>

            <div className="flex flex-col gap-2 text-sm">
              <a href="#">About Us</a>
              <a href="#">Services</a>
              <a href="#">Case Studies</a>
              <a href="#">How it works</a>
              <a href="#">Blog</a>
              <a href="#">Careers</a>
              <a href="#">Areas We Serve</a>
            </div>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact us</h3>

            <p className="text-sm leading-relaxed">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </p>

            <p className="mt-3 text-sm font-medium">+923183561921</p>

            {/* SOCIAL ICONS */}
            <div className="mt-6 flex gap-3">
              <SocialIcon>
                <svg width="14" height="14" fill="currentColor" viewBox="0 0 320 512">
                  <path d="M279.14 288l14.22-92.66h-88.91V129.08c0-25.35 12.42-50.06 52.24-50.06H295V6.26S273.48 0 252.63 0C182.59 0 137.57 44.38 137.57 124.72v70.62H48v92.66h89.57V512h107.7V288z"/>
                </svg>
              </SocialIcon>

              <SocialIcon>
                <svg width="14" height="14" fill="currentColor" viewBox="0 0 448 512">
                  <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9S160.5 370.9 224.1 370.9 339 319.6 339 255.9 287.7 141 224.1 141zm124.7-41c0 14.9-12 26.9-26.9 26.9s-26.9-12-26.9-26.9 12-26.9 26.9-26.9 26.9 12 26.9 26.9zM398.8 80c-44.5-44.5-103.7-69-166.3-69S110.8 35.5 66.3 80C21.8 124.5-2.7 183.7-2.7 246.3S21.8 368.1 66.3 412.6C110.8 457.1 170 481.6 232.6 481.6S354.4 457.1 398.9 412.6C443.4 368.1 467.9 308.9 467.9 246.3S443.3 124.5 398.8 80z"/>
                </svg>
              </SocialIcon>

              <SocialIcon>
                <svg width="14" height="14" fill="currentColor" viewBox="0 0 512 512">
                  <path d="M459.4 151.7c.3 4.5.3 9 .3 13.6 0 138.7-105.6 298.7-298.7 298.7A296.77 296.77 0 0 1 0 408.1a209.3 209.3 0 0 0 24.5 1.4 210 210 0 0 0 130.1-44.9 105 105 0 0 1-97.9-72.6 132.35 132.35 0 0 0 19.8 1.6 110.66 110.66 0 0 0 27.6-3.6A104.92 104.92 0 0 1 20.9 185v-1.3a105.75 105.75 0 0 0 47.4 13A104.91 104.91 0 0 1 35.7 96.6a298.71 298.71 0 0 0 216.9 110A118.17 118.17 0 0 1 409 89.4a209.34 209.34 0 0 0 66.6-25.5 105 105 0 0 1-46.1 58 209 209 0 0 0 60.2-16.4 221.89 221.89 0 0 1-53.3 55.2z"/>
                </svg>
              </SocialIcon>

              <SocialIcon>
                <svg width="14" height="14" fill="currentColor" viewBox="0 0 448 512">
                  <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8 0 24.3 23.6 0 53 0c30 0 53.9 24.3 53.9 53.8-.1 29.7-24 54.3-53.1 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.4-48.4-79.4-48.4 0-55.8 37.8-55.8 76.9V448h-92.8V148.9h89.2v40.8h1.3c12.4-23.5 42.8-48.3 88-48.3 94 0 111.3 61.9 111.3 142.3V448z"/>
                </svg>
              </SocialIcon>
            </div>
          </div>
        </div>

        {/* LINE */}
        <div className="border-t mt-12 mb-4"></div>

        <p className="text-center text-sm text-gray-600">
          © 2023 Copyright by IK Developers. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

function SocialIcon({ children }) {
  return (
    <div className="w-9 h-9 rounded-full bg-white shadow-md flex items-center justify-center cursor-pointer hover:scale-105 transition">
      {children}
    </div>
  );
}

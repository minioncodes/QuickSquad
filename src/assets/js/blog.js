// scripts.js

const blogs = [
  {
    "title": "How to Fix Slow Internet and Connectivity Issues",
    "image": "https://procol.co.uk/wp-content/uploads/2017/07/news-internet-frustration-01.jpg",
    "date": "February 10, 2025",
    "url": "/blogs/Slow-Internet-Issues",
    "description": "Slow internet can be frustrating! Learn how to troubleshoot your network, optimize router settings, and speed up your connection with simple steps."
  },
  {
    "title": "Common Computer Problems & How to Fix Them",
    "image": "https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2024/07/a-blue-screen-of-death-error-appearing-on-a-windows-laptop-while-a-woman-is-using-it.jpg",
    "date": "February 10, 2025",
    "url": "/Blogs/Computer-Problem",
    "description": "Facing issues like freezing, crashing, or blue screen errors? Here’s a step-by-step guide to fixing common PC problems on your own."
  },
  {
    "title": "Protecting Your Devices from Viruses & Malware",
    "image": "https://media.istockphoto.com/id/1047952354/vector/alert-message-of-virus-detected-scanning-and-identifying-computer-virus-inside-binary-code.jpg?s=612x612&w=0&k=20&c=a4urCTse4J29kN9wxXqN9efnyWg_c7udz9kvf2RGAyE=",
    "date": "February 10, 2025",
    "url": "/Blogs/Protecting-Your-Devices-from-Viruses-&-Malware",
    "description": "Keep your devices safe from cyber threats! Learn about antivirus, malware removal, and best security practices to stay safe."
  },
  {
    "title": "Remote Tech Support: How It Works & When You Need It",
    "image": "https://unity-connect.com/wp-content/uploads/2023/05/Complete-Guide-to-Remote-Desktop-Support-Software_670276063.jpg",
    "date": "February 10, 2025",
    "url": "/Blogs/Remote-Tech-Support",
    "description": "Need tech help but can’t visit a service center? Learn how remote tech support works, its benefits, and when to use it for troubleshooting."
  },
  {
    "title": "Best Tips to Optimize Your PC Performance",
    "image": "https://www.hp.com/us-en/shop/app/assets/images/uploads/prod/7-ways-to-improve-computer-performance-11549066174778.jpg",
    "date": "February 10, 2025",
    "url": "/Blogs/Best-Tips-to-Optimize-Your-PC-Performance",
    "description": "Is your PC running slow? Follow these expert tips to clean up junk files, manage startup programs, and boost system performance easily!"
  },
  {
    "title": "How AI-Powered Chatbots Are Revolutionizing Tech Support in 2025",
    "image": "https://imageio.forbes.com/specials-images/imageserve/656e010c1eacbfe7918ca848/AI-Customer-Service/960x0.png?format=png&width=960",
    "date": "April 2, 2025",
    "url": "/Blogs/AI-Powered",
    "description": "AI-powered chatbots are transforming tech support! discover how businesses can enhance customer support with AI-driven solutions."
  },
  {
    "title": "Millennials vs. Gen Z: How Their Customer Support Expectations Differ",
    "image": "https://callcenterstudio.com/wp-content/uploads/2023/07/Millennials-vs.-Gen-Z_-What-Type-of-Customer-Experience-is-Gen-Z-Expecting.webp",
    "date": "April 8, 2025",
    "url": "/blogs/Tech-support/",
    "description": "Explore how Millennials and Gen Z approach customer support differently, and how your business can adapt to serve both effectively."
  },
  {
    "title": "The Most Frequent Questions We Get at Our Help Desk",
    "image": "https://styledispatch.com/wp-content/uploads/2021/01/shutterstock_1050638456-660x400.jpg",
    "date": "April 14, 2025",
    "url": "/blogs/help-desk-questions/",
    "description": "Discover how our help desk handles incidents, routine changes, user queries, and more—with insights from real support data."
  },
  {
    "title": "How Artificial Intelligence Can Improve IT for Businesses",
    "image": "https://micropro.com/wp-content/uploads/2022/09/xrobotic-helping-hand.jpg.pagespeed.ic.W2HELOHRXy.webp",
    "date": "May 6, 2025",
    "url": "/blogs/ai-in-it-support/",
    "description": "Learn how AI is revolutionizing IT support by reducing costs, enhancing efficiency, and securing networks—tailored for modern business needs."
  },
  {
    "title": "Standard Operating Procedures (SOPs) and Training",
    "image": "/assets/sops.png",
    "date": "May 12, 2025",
    "url": "/blogs/Standard_Operating_Procedures",
    "description": "SOPs provide a clear, consistent process for handling support tasks, ensuring quality and efficiency. Regular training keeps support staff updated on tools, protocols, and best practices, improving response times and customer satisfaction."
  }
];

const container = document.getElementById("blog-container");

blogs.forEach(blog => {
  const card = `
    <div role="listitem" class="w-dyn-item w-col w-col-4">
      <div class="blog-card">
        <div style="background: url('${blog.image}') center/cover no-repeat;" class="blog-block _1">
          <div class="color-box blog"></div>
        </div>
        <div class="div-date w-clearfix">
          <div class="date white"></div>
          <p class="footer-text white _2">${blog.date}</p>
        </div>
        <div class="div-text">
          <a href="${blog.url}" class="blog-tittle-link">${blog.title}</a>
          <p>${blog.description}</p>
          <a href="${blog.url}" class="button feature outline w-button">Read more</a>
        </div>
      </div>
    </div>
  `;
  container.innerHTML += card;
});

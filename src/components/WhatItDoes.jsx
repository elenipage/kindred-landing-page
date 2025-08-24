export default function WhatItDoes () {

return (
<section className="bg-white px-6 sm:px-8 pt-10 pb-15 border-b-2 border-gray-200">
  <div className="max-w-5xl mx-auto text-center">
    <h2 className="text-4xl font-bold mb-10 text-gray-900 text-start">How it works</h2>

    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      <div className="p-6 rounded-2xl shadow-md bg-gray-50 flex flex-col justify-center items-center">
        <img className="w-15 mb-3" src="src/assets/locationPin.png"/>
        <h3 className="text-xl font-semibold mb-2">See What’s Nearby</h3>
        <p className="text-gray-600 text-sm">Explore clubs, groups, and hangouts near you on an interactive map.</p>
      </div>
      <div className="p-6 rounded-2xl shadow-md bg-gray-50 flex flex-col justify-center items-center">
        <img className="w-15 mb-3" src="src/assets/chatBubble.png"/>
        <h3 className="text-xl font-semibold mb-2">Chat Before You Go</h3>
        <p className="text-gray-600 text-sm">Group chats with other attendees help you connect and ease social anxiety.</p>
      </div>
      <div className="p-6 rounded-2xl shadow-md bg-gray-50 flex flex-col justify-center items-center">
        <img className="w-15 mb-3" src="src/assets/tagIcon.png"/>
        <h3 className="text-xl font-semibold mb-2">Find What Fits You</h3>
        <p className="text-gray-600 text-sm">Filter by interests, age, access needs, and inclusion tags.</p>
      </div>
      <div className="p-6 rounded-2xl shadow-md bg-gray-50 flex flex-col justify-center items-center">
        <img className="w-15 mb-3" src="src/assets/starIcon.png"/>
        <h3 className="text-xl font-semibold mb-2">Earn Badges</h3>
        <p className="text-gray-600 text-sm">Celebrate your milestones and earn rewards for trying new things.</p>
      </div>
      <div className="p-6 rounded-2xl shadow-md bg-gray-50 flex flex-col justify-center items-center">
        <img className="w-15 mb-3" src="src/assets/secureIcon.png"/>
        <h3 className="text-xl font-semibold mb-2">Safe & Welcoming</h3>
        <p className="text-gray-600 text-sm">All spaces are reviewed and moderated by young people like you.</p>
      </div>
      <div className="p-6 rounded-2xl shadow-md bg-gray-50 flex flex-col justify-center items-center">
        <img className="w-15 mb-3" src="src/assets/brainIcon.png"/>
        <h3 className="text-xl font-semibold mb-2">Built for Neurodivergence</h3>
        <p className="text-gray-600 text-sm">Designed with inclusion, comfort, and community in mind.</p>
      </div>
    </div>
  </div>
</section>
)
}

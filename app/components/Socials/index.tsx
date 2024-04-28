import Link from "next/link";

export const Socials = ({ showGithub }: { showGithub: boolean }) => {
  return (
    <div className="flex gap-[2.25vw]">
      {[
        {
          link: "https://discord.gg/hndRCZwQnb",
          svg: (
            <svg
              width="55"
              height="41"
              viewBox="0 0 55 41"
              className="w-[2.813vw]"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M46.5369 3.40735C43.0535 1.81902 39.282 0.666193 35.3533 0.00011784C35.3189 -0.000959674 35.2846 0.00536313 35.2529 0.0186418C35.2212 0.0319205 35.1929 0.0518326 35.17 0.0769733C34.6985 0.922377 34.1485 2.02396 33.7818 2.86937C29.6148 2.25453 25.3771 2.25453 21.2101 2.86937C20.8434 1.99834 20.2934 0.922377 19.7957 0.0769733C19.7695 0.0257367 19.691 0.00011784 19.6124 0.00011784C15.6837 0.666193 11.9384 1.81902 8.42876 3.40735C8.40257 3.40735 8.37637 3.43297 8.35018 3.45859C1.22618 13.8852 -0.738162 24.0301 0.230912 34.0724C0.230912 34.1237 0.257103 34.1749 0.309486 34.2005C5.0239 37.5822 9.55498 39.6316 14.0337 40.9894C14.1122 41.015 14.1908 40.9894 14.217 40.9382C15.2647 39.5291 16.2075 38.0433 17.0195 36.4806C17.0719 36.3781 17.0195 36.2756 16.9147 36.25C15.4218 35.6864 14.0075 35.0203 12.6193 34.2518C12.5146 34.2005 12.5146 34.0468 12.5932 33.97C12.8813 33.765 13.1694 33.5345 13.4575 33.3295C13.5098 33.2783 13.5884 33.2783 13.6408 33.3039C22.6506 37.326 32.3675 37.326 41.2725 33.3039C41.3249 33.2783 41.4035 33.2783 41.4559 33.3295C41.744 33.5601 42.0321 33.765 42.3202 33.9956C42.4249 34.0725 42.4249 34.2262 42.294 34.2774C40.932 35.0716 39.4915 35.712 37.9986 36.2756C37.8939 36.3012 37.8677 36.4293 37.8939 36.5062C38.732 38.0689 39.6749 39.5548 40.6963 40.9638C40.7749 40.9894 40.8535 41.015 40.932 40.9894C45.4369 39.6316 49.968 37.5822 54.6824 34.2005C54.7348 34.1749 54.761 34.1237 54.761 34.0724C55.9134 22.4674 52.849 12.3994 46.6417 3.45859C46.6155 3.43297 46.5893 3.40735 46.5369 3.40735ZM18.3814 27.9497C15.6837 27.9497 13.4313 25.5159 13.4313 22.5186C13.4313 19.5213 15.6313 17.0875 18.3814 17.0875C21.1577 17.0875 23.3577 19.5469 23.3315 22.5186C23.3315 25.5159 21.1315 27.9497 18.3814 27.9497ZM36.6367 27.9497C33.939 27.9497 31.6865 25.5159 31.6865 22.5186C31.6865 19.5213 33.8866 17.0875 36.6367 17.0875C39.4129 17.0875 41.613 19.5469 41.5868 22.5186C41.5868 25.5159 39.4129 27.9497 36.6367 27.9497Z"
                fill="#3A39FF"
                className="group-hover:fill-dark"
              />
            </svg>
          ),
        },
        {
          link: "https://t.me/ZkNoid",
          svg: (
            <svg
              width="41"
              height="36"
              viewBox="0 0 41 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-[2.813vw]"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M36.7264 1.13691C37.2301 0.92489 37.7815 0.851767 38.3231 0.925148C38.8647 0.998528 39.3767 1.21573 39.8058 1.55415C40.235 1.89256 40.5656 2.33982 40.7633 2.84937C40.9609 3.35891 41.0184 3.91212 40.9297 4.45141L36.3065 32.4943C35.858 35.1993 32.89 36.7505 30.4093 35.4031C28.3341 34.2759 25.252 32.5391 22.4797 30.7269C21.0936 29.8198 16.8475 26.9151 17.3693 24.8481C17.8178 23.0807 24.9523 16.4395 29.0292 12.491C30.6294 10.9398 29.8996 10.0449 28.01 11.4718C23.3175 15.0146 15.7834 20.4022 13.2925 21.9188C11.095 23.256 9.94941 23.4844 8.57957 23.256C6.08044 22.8402 3.76274 22.1961 1.87106 21.4113C-0.685145 20.3513 -0.5608 16.837 1.86902 15.8137L36.7264 1.13691Z"
                fill="#3A39FF"
                className="group-hover:fill-dark"
              />
            </svg>
          ),
        },
        {
          link: "https://twitter.com/ZkNoid",
          svg: (
            <svg
              width="39"
              height="36"
              viewBox="0 0 39 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-[2.813vw]"
            >
              <path
                d="M30.4953 0.897461H36.4327L23.4608 15.7248L38.7222 35.8975H26.7732L17.4153 23.6613L6.70539 35.8975H0.764763L14.6402 20.0375L0 0.899074H12.2523L20.7115 12.0833L30.4953 0.897461ZM28.4124 32.3447H31.7022L10.4647 4.26468H6.93449L28.4124 32.3447Z"
                fill="#3A39FF"
                className="group-hover:fill-dark"
              />
            </svg>
          ),
        },
        {
          link: "https://medium.com/@zknoid",
          svg: (
            <svg
              width="45"
              height="28"
              viewBox="0 0 45 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-[2.813vw]"
            >
              <path
                d="M13.5 0.897461C17.0804 0.897461 20.5142 2.31978 23.0459 4.85152C25.5777 7.38326 27 10.817 27 14.3975C27 17.9779 25.5777 21.4117 23.0459 23.9434C20.5142 26.4751 17.0804 27.8975 13.5 27.8975C9.91958 27.8975 6.4858 26.4751 3.95406 23.9434C1.42232 21.4117 0 17.9779 0 14.3975C0 10.817 1.42232 7.38326 3.95406 4.85152C6.4858 2.31978 9.91958 0.897461 13.5 0.897461ZM33.75 3.14746C37.125 3.14746 39.375 8.18521 39.375 14.3975C39.375 20.6097 37.125 25.6475 33.75 25.6475C30.375 25.6475 28.125 20.6097 28.125 14.3975C28.125 8.18521 30.375 3.14746 33.75 3.14746ZM42.75 4.27246C43.605 4.27246 44.352 6.13321 44.73 9.32596L44.8358 10.3227L44.8785 10.8515L44.946 11.963L44.9685 12.5457L44.9955 13.763L45 14.3975L44.9955 15.032L44.9685 16.2492L44.946 16.8342L44.8785 17.9435L44.8335 18.4722L44.7323 19.469C44.352 22.664 43.6073 24.5225 42.75 24.5225C41.895 24.5225 41.148 22.6617 40.77 19.469L40.6642 18.4722C40.6488 18.2961 40.6345 18.1198 40.6215 17.9435L40.554 16.832C40.5453 16.6378 40.5378 16.4435 40.5315 16.2492L40.5045 15.032V13.763L40.5315 12.5457L40.554 11.9607L40.6215 10.8515L40.6665 10.3227L40.7677 9.32596C41.148 6.13096 41.8927 4.27246 42.75 4.27246Z"
                fill="#3A39FF"
                className="group-hover:fill-dark"
              />
            </svg>
          ),
        },
        ...(showGithub
          ? [
              {
                link: "https://github.com/ZkNoid",
                svg: (
                  <svg
                    width="45"
                    height="45"
                    viewBox="0 0 45 45"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-[2.813vw]"
                  >
                    <path
                      d="M22.5 0.897461C19.5453 0.897461 16.6194 1.47944 13.8896 2.61017C11.1598 3.7409 8.67942 5.39824 6.5901 7.48756C2.37053 11.7071 0 17.4301 0 23.3975C0 33.3425 6.4575 41.78 15.39 44.7725C16.515 44.9525 16.875 44.255 16.875 43.6475V39.845C10.6425 41.195 9.315 36.83 9.315 36.83C8.28 34.22 6.8175 33.5225 6.8175 33.5225C4.77 32.1275 6.975 32.1725 6.975 32.1725C9.225 32.33 10.4175 34.49 10.4175 34.49C12.375 37.91 15.6825 36.8975 16.965 36.3575C17.1675 34.895 17.7525 33.905 18.3825 33.3425C13.3875 32.78 8.145 30.845 8.145 22.2725C8.145 19.775 9 17.7725 10.4625 16.175C10.2375 15.6125 9.45 13.2725 10.6875 10.235C10.6875 10.235 12.5775 9.62746 16.875 12.53C18.6525 12.035 20.5875 11.7875 22.5 11.7875C24.4125 11.7875 26.3475 12.035 28.125 12.53C32.4225 9.62746 34.3125 10.235 34.3125 10.235C35.55 13.2725 34.7625 15.6125 34.5375 16.175C36 17.7725 36.855 19.775 36.855 22.2725C36.855 30.8675 31.59 32.7575 26.5725 33.32C27.3825 34.0175 28.125 35.39 28.125 37.4825V43.6475C28.125 44.255 28.485 44.975 29.6325 44.7725C38.565 41.7575 45 33.3425 45 23.3975C45 20.4427 44.418 17.5169 43.2873 14.7871C42.1566 12.0573 40.4992 9.57688 38.4099 7.48756C36.3206 5.39824 33.8402 3.7409 31.1104 2.61017C28.3806 1.47944 25.4547 0.897461 22.5 0.897461Z"
                      fill="#3A39FF"
                      className="group-hover:fill-dark"
                    />
                  </svg>
                ),
              },
            ]
          : []),
      ].map((x, i) => (
        <Link
          key={i}
          href={x!.link}
          target="_blank"
          rel="noopener noreferrer"
          className="w-[calc(4.125vw+0.375vw)] h-[calc(4.125vw+0.375vw)] hover:pt-[0.375vw] hover:pl-[0.375vw] group"
        >
          <div className="bg-[white] w-[4.125vw] h-[4.125vw] rounded-[0.6vw] flex items-center justify-center shadow-main cursor-pointer group-hover:shadow-none group-hover:border group-hover:font-black">
            {x.svg}
          </div>
        </Link>
      ))}
    </div>
  );
};

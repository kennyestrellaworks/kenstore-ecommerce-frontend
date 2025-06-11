import { Link } from "react-router-dom";
import { Button } from "./Button";

export const NotFound = () => {
  return (
    <div className="extras">
      <div className="extras__container">
        <h1 className="extras__heading">
          Sorry, the page you were looking for was not found.
        </h1>
        <div className="extras__button">
          <Button
            to="/"
            type={"link"}
            className={"button button__primary"}
            hasIcon={
              <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_21_2)">
                  <path d="M196.643 91.0435L166.332 60.7326V25.7183C166.332 19.3872 161.202 14.2564 154.861 14.2564C148.536 14.2564 143.405 19.3872 143.405 25.7183V37.8059L120.836 15.2362C109.678 4.08396 90.2773 4.10374 79.1445 15.2564L3.35573 91.0435C-1.11825 95.5264 -1.11825 102.78 3.35573 107.256C7.83172 111.738 15.0994 111.738 19.5738 107.256L95.3553 31.4668C97.824 29.011 102.175 29.011 104.631 31.4595L180.425 107.256C182.673 109.497 185.603 110.612 188.532 110.612C191.468 110.612 194.403 109.496 196.644 107.256C201.119 102.78 201.119 95.5268 196.643 91.0435Z" />
                  <path d="M103.981 53.2242C101.78 51.0236 98.2144 51.0236 96.019 53.2242L29.355 119.868C28.3025 120.921 27.7058 122.357 27.7058 123.856V172.464C27.7058 183.87 36.9541 193.118 48.3599 193.118H81.3653V142.003H118.628V193.118H151.634C163.039 193.118 172.287 183.87 172.287 172.464V123.856C172.287 122.357 171.696 120.921 170.638 119.868L103.981 53.2242Z" />
                </g>
                <defs>
                  <clipPath id="clip0_21_2">
                    <rect width="200" height="200" />
                  </clipPath>
                </defs>
              </svg>
            }
            buttonContent={"Return to Home"}
          />
        </div>
      </div>
    </div>
  );
};

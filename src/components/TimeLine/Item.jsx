import React from "react";
import Fade from "react-reveal/Fade";
import Link from "next/link";

const LinkIf = ({ condition, href, children, ...rest }) =>
  condition ? (
    <Link href={href} {...rest} passHref>
      <a>{children}</a>
    </Link>
  ) : (
    children
  );

const TimeLineItem = ({
  even,
  slug,
  pretitle,
  title,
  subtitle,
  media,
  details,
  disableHeader,
  link,
  onOpenDetails,
  children,
}) => {
  return (
    <div id={slug} className="timeline-item py-5">
      <div className="container">
        {!disableHeader && (
          <div className="timeline-item-header mb-3">
            <Fade bottom>
              <span className="timeline-item-pretitle h4 font-weight-bold d-block text-center text-uppercase w-100 m-0">
                {pretitle}
              </span>
              <span className="timeline-item-title display-4 font-weight-bold d-block text-center text-uppercase w-100 m-0">
                {title}
              </span>
            </Fade>
          </div>
        )}
        <div className="timeline-item-sides">
          <Fade left={!even} right={even}>
            <div className="timeline-item-side timeline-item-side-info">
              <h2
                className={`timeline-item-subtitle mb-3 text-uppercase ${
                  details ? "anchor" : ""
                }`}
                onClick={() => details && onOpenDetails(details)}
              >
                <LinkIf
                  condition={link}
                  href={link && link.url ? link.url : link}
                  target={link && link.target ? link.target : "_blank"}
                >
                  {subtitle}
                </LinkIf>
              </h2>

              <div className="timeline-item-text">{children}</div>
            </div>
          </Fade>
          <span className="timeline-item-divider" />
          <div className="timeline-item-side timeline-item-side-media">
            <Fade left={even} right={!even}>
              <div className="timeline-item-media">{media}</div>
            </Fade>

            {details && (
              <div
                className="timeline-item-btn"
                onClick={() => onOpenDetails(details)}
              >
                <i className="fal fa-info-circle"></i>
              </div>
            )}
            {link && (
              <a
                className="timeline-item-btn"
                href={link && link.url ? link.url : link}
                target={link && link.target ? link.target : "_blank"}
              >
                <i className="fal fa-link"></i>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimeLineItem;

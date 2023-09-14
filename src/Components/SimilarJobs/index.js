import {MdLocationOn} from 'react-icons/md'
import {AiFillStar} from 'react-icons/ai'
import './index.css'

const SimilarJobs = props => {
  const {similarJobData} = props
  const {
    companyLogoUrl,
    // eslint-disable-next-line no-unused-vars
    id,
    jobDescription,
    employmentType,
    location,
    rating,
    title,
  } = similarJobData

  console.log(similarJobData)

  return (
    <li className="similar-job-li-container">
      <div className="img-job-container">
        <img
          className="company-job-logo"
          src={companyLogoUrl}
          alt="similar job company logo"
        />
        <div className="title-job-container">
          <h1 className="title-job-heading">{title}</h1>
          <div className="star-job-container">
            <AiFillStar className="star-job-icon" />
            <p className="rating-job-text">{rating}</p>
          </div>
        </div>
      </div>
      <div className="second-part-job-container">
        <h1 className="description-job-heading">Description</h1>
        <p className="description-job-para">{jobDescription}</p>
      </div>
      <div className="location-job-container">
        <div className="location-job-container">
          <MdLocationOn className="location-job-icon" />
          <p className="location-job">{location}</p>
        </div>
        <div className="employment-job-type-icon-container">
          <p className="job-type">{employmentType}</p>
        </div>
      </div>
    </li>
  )
}

export default SimilarJobs

import React from "react";
import styles from "../stylesheets/documentationText.module.css";
import baseURL from "@/app/constants/baseURL";

const DocumentationText = props => {
  return (
    <div className={styles.documentationText}>
      <h1 className={styles.mainHeading}>API Documentation</h1>
      <p className={styles.paragraph}>
        The Drunken Bytes API was built to provide a simple way of accessing
        global aviation data for real-time and historical flights as well as
        allow customers to tap into an extensive data set of airline routes and
        other up-to-date aviation-related information. Requests to the REST API
        are made using a straightforward HTTP GET URL structure and responses
        are provided in lightweight JSON format.
      </p>
      <p className={styles.paragraph}>
        The following API documentation can be applied for any major programming
        langauge and will present general integration guides and explanations
        around API endpoints, request parameters and response objects. If any
        questions remain unanswered for you, simply reach out to the drunken
        bytes support team for assistance.
      </p>

      <h2 className={styles.heading}>Getting Started</h2>
      <h3 className={styles.subHeading} id="api-access-key">API Access Key & Authentication</h3>
      <hr className={styles.hr} />
      <p className={styles.paragraph}>
        After creating an drunken bytes account, you will be able to retrieve
        your unique API access key using your account dashboard. Each drunken
        bytes account can have multiple API access key.
      </p>
      <p className={styles.paragraph}>
        To connect to the API, simply attach the api_key parameter to any valid
        API endpoint URL and set it to your api key. Also add the api secret in
        the Authentication Header as Bearer &lt;api_secret&gt;.
      </p>
      <p className={styles.paragraph}>Find a Nodejs example below.</p>
      <div className={styles.code}>
        fetch<span>(</span>
        <br />
        &ensp;{baseURL}/nft/mint-nft?api_key=YOUR_API_KEY'<span>,</span>{" "}
        <span>&#123;</span> <br />
        &ensp;method<span>:</span> "POST"<span>,</span>
        <br />
        &ensp;body<span>:</span> JSON.stringify<span>(</span>
        <span>&#123;</span>
        <br />
        &ensp;&ensp;buyerName<span>:</span> buyerName<span>,</span>
        <br />
        &ensp;&ensp;buyerEmail<span>:</span> buyerEmail<span>,</span>
        <br />
        &ensp;&ensp;brandName<span>:</span> brandName<span>,</span>
        <br />
        &ensp;&ensp;productName<span>:</span> productName<span>,</span>
        <br />
        &ensp;&ensp;productId<span>:</span> productId<span>,</span>
        <br />
        &ensp;&ensp;warrantyExpireDate<span>:</span> warrantyExpireDate<span>,</span>
        <br />
        &ensp;&ensp;buyerMetamaskAddress<span>:</span> buyerMetamaskAddress<span>,</span>
        <br />
        &ensp;&ensp;methodType<span>:</span> 0<br />
        &ensp;<span>&#125;</span>
        <span>)</span>
        <br />
        &ensp;headers<span>:</span> <span>&#123;</span>
        <br />
        &ensp;&ensp;Authorization<span>:</span> "Bearer " + YOUR_API_SECRET<br />
        &ensp;<span>&#125;</span>
        <span>)</span>
        <br />
        <span>&#125;</span>
        <span>)</span>;
      </div>
      <div className={styles.warning}>
        <strong>Keek you key and secret safe</strong>: To prevent unauthorized
        access to your drunken bytes account, please make sure to keep your API
        access key safe at all times. You can always generate a new key using
        your account dashboard.
      </div>
      <h3 className={styles.subHeading} id="api-error">API Error</h3>
      <hr className={styles.hr} />
      <p className={styles.paragraph}>
        If your request to the aviationstack API does not succeed, the API will
        return a JSON error response that contains error <code>code</code> and{" "}
        <code>message</code> objects indicating the type of error that occurred.
        The API also supports HTTP status codes, returning a code of{" "}
        <code>200</code> for successful requests, and an error status code (e.g.{" "}
        <code>404</code>) for failed requests.
      </p>
      <p className={styles.paragraph}>
        If a validation error occurs, hence, an API parameter is used in an
        invalid way, there will be an additional <code>context</code> object
        containing multiple sub-objects with the associated API parameter as the
        key and details about the given validation error(s) further sub-objects.
        Each instance of a validation error contains <code>key</code> and{" "}
        <code>message</code> objects.
      </p>
      <p className={styles.paragraph}>
        <strong className={styles.subTitle}>Example Error:</strong>
      </p>
      <div className={styles.code}>
        <span>&#123;</span>
        <br />
        &ensp; success<span>:</span> "failed" <span>,</span>
        <br />
        &ensp; error<span>:</span> <span>&#123;</span>
        <br />
        &ensp; &ensp; message<span>:</span> "Internal Server Error" <br />
        &ensp;<span>&#125;</span>
        <br />
        <span>&#125;</span>
        <br />
      </div>
      <p className={styles.paragraph}>
        <strong className={styles.subTitle}>Common API Errors:</strong>
      </p>
      <div className={styles.tableContainer}>
      <table>
        <thead>
          <tr>
            <th>Code</th>
            <th> Type</th>
            <th> Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <code>403</code>
            </td>
            <td>
              <code>invalid_api_key</code>
            </td>
            <td>An invalid API access key was supplied.</td>
          </tr>
          <tr>
            <td>
              <code>401</code>
            </td>
            <td>
              <code>missing_access_key</code>
            </td>
            <td>No API access key was supplied.</td>
          </tr>
          <tr>
            <td>
              <code>401</code>
            </td>
            <td>
              <code>unauthorized_access</code>
            </td>
            <td>Authorization Header was not supplied.</td>
          </tr>
          <tr>
            <td>
              <code>403</code>
            </td>
            <td>
              <code>wallet_balance_is_insufficient</code>
            </td>
            <td>
              Wallet Balance required to execute the code is not sufficient.
            </td>
          </tr>
          <tr>
            <td>
              <code>404</code>
            </td>
            <td>
              <code>invalid_api_function</code>
            </td>
            <td>The given API endpoint does not exist.</td>
          </tr>
          <tr>
            <td>
              <code>404</code>
            </td>
            <td>
              <code>404_not_found</code>
            </td>
            <td>Resource not found.</td>
          </tr>
          <tr>
            <td>
              <code>500</code>
            </td>
            <td>
              <code>internal_error</code>
            </td>
            <td>An internal error occurred.</td>
          </tr>
        </tbody>
      </table>
</div>
      <h2 className={styles.heading}>API Endpoints</h2>
      <h3 className={styles.subHeading} id="create-nft">Create NFT</h3>
      <hr className={styles.hr} />
      <p className={styles.paragraph}>
        The API is capable of tracking flights and retrieving flight status
        information in real-time. In order to look up real-time information
        about one or multiple flights, you can use the API's flights endpoint
        together with optional parameters to filter your result set.
      </p>
      <p className={styles.paragraph}>
        <strong className={styles.subTitle}>Example API Request:</strong>
      </p>
      <div className={styles.code}>
        fetch<span>(</span>
        <br />
        &ensp;{baseURL}/nft/mint-nft?api_key=YOUR_API_KEY'<span>,</span>{" "}
        <span>&#123;</span> <br />
        &ensp;method<span>:</span> "POST"<span>,</span>
        <br />
        &ensp;body<span>:</span> JSON.stringify<span>(</span>
        <span>&#123;</span>
        <br />
        &ensp;&ensp;buyerName<span>:</span> buyerName<span>,</span>
        <br />
        &ensp;&ensp;buyerEmail<span>:</span> buyerEmail<span>,</span>
        <br />
        &ensp;&ensp;brandName<span>:</span> brandName<span>,</span>
        <br />
        &ensp;&ensp;productName<span>:</span> productName<span>,</span>
        <br />
        &ensp;&ensp;productId<span>:</span> productId<span>,</span>
        <br />
        &ensp;&ensp;warrantyExpireDate<span>:</span> warrantyExpireDate<span>,</span>
        <br />
        &ensp;&ensp;buyerMetamaskAddress<span>:</span> buyerMetamaskAddress<span>,</span>
        <br />
        &ensp;&ensp;methodType<span>:</span> 0<br />
        &ensp;<span>&#125;</span>
        <span>)</span>
        <br />
        &ensp;headers<span>:</span> <span>&#123;</span>
        <br />
        &ensp;&ensp;Authorization<span>:</span> "Bearer " + YOUR_API_SECRET<br />
        &ensp;<span>&#125;</span>
        <span>)</span>
        <br />
        <span>&#125;</span>
        <span>)</span>;
      </div>
      <p className={styles.paragraph}>
        <strong className={styles.subTitle}>Example API Response:</strong>
      </p>
      <div className={styles.code}>
        <span>&#123;</span>
        <br />
        &ensp; success<span>:</span> "failed" <span>,</span>
        <br />
        &ensp; error<span>:</span> <span>&#123;</span>
        <br />
        &ensp; &ensp; message<span>:</span> "Internal Server Error" <br />
        &ensp;<span>&#125;</span>
        <br />
        <span>&#125;</span>
        <br />
      </div>
      <span className={styles.space} />

      <h3 className={styles.subHeading} id="transfer-nft">Transfer NFT</h3>
      <hr className={styles.hr} />
      <p className={styles.paragraph}>
        The API is capable of tracking flights and retrieving flight status
        information in real-time. In order to look up real-time information
        about one or multiple flights, you can use the API's flights endpoint
        together with optional parameters to filter your result set.
      </p>
      <p className={styles.paragraph}>
        <strong className={styles.subTitle}>Example API Request:</strong>
      </p>
      <div className={styles.code}>
        fetch<span>(</span>
        <br />
        &ensp;{baseURL}/nft/mint-nft?api_key=YOUR_API_KEY'<span>,</span>{" "}
        <span>&#123;</span> <br />
        &ensp;method<span>:</span> "POST"<span>,</span>
        <br />
        &ensp;body<span>:</span> JSON.stringify<span>(</span>
        <span>&#123;</span>
        <br />
        &ensp;&ensp;buyerName<span>:</span> buyerName<span>,</span>
        <br />
        &ensp;&ensp;buyerEmail<span>:</span> buyerEmail<span>,</span>
        <br />
        &ensp;&ensp;brandName<span>:</span> brandName<span>,</span>
        <br />
        &ensp;&ensp;productName<span>:</span> productName<span>,</span>
        <br />
        &ensp;&ensp;productId<span>:</span> productId<span>,</span>
        <br />
        &ensp;&ensp;warrantyExpireDate<span>:</span> warrantyExpireDate<span>,</span>
        <br />
        &ensp;&ensp;buyerMetamaskAddress<span>:</span> buyerMetamaskAddress<span>,</span>
        <br />
        &ensp;&ensp;methodType<span>:</span> 0<br />
        &ensp;<span>&#125;</span>
        <span>)</span>
        <br />
        &ensp;headers<span>:</span> <span>&#123;</span>
        <br />
        &ensp;&ensp;Authorization<span>:</span> "Bearer " + YOUR_API_SECRET<br />
        &ensp;<span>&#125;</span>
        <span>)</span>
        <br />
        <span>&#125;</span>
        <span>)</span>;
      </div>
      <p className={styles.paragraph}>
        <strong className={styles.subTitle}>Example API Response:</strong>
      </p>
      <div className={styles.code}>
        <span>&#123;</span>
        <br />
        &ensp; success<span>:</span> "failed" <span>,</span>
        <br />
        &ensp; error<span>:</span> <span>&#123;</span>
        <br />
        &ensp; &ensp; message<span>:</span> "Internal Server Error" <br />
        &ensp;<span>&#125;</span>
        <br />
        <span>&#125;</span>
        <br />
      </div>

      <h2 className={styles.heading} id="code-examples">Code Examples</h2>
      <p className={styles.paragraph}>
        A number of code examples in different programming languages were
        prepared for you to get up and running with the aviationstack API as
        quickly as possible. You will find them below in PHP, Python, Node.js.,
        jQuery, Go and Ruby.
      </p>
      <span className={styles.space} />

      <h3 className={styles.subHeading} id="php">PHP</h3>
      <hr className={styles.hr} />
      <div className={styles.code}>
        <span>&#123;</span>
        <br />
        &ensp; success<span>:</span> "failed" <span>,</span>
        <br />
        &ensp; error<span>:</span> <span>&#123;</span>
        <br />
        &ensp; &ensp; message<span>:</span> "Internal Server Error" <br />
        &ensp;<span>&#125;</span>
        <br />
        <span>&#125;</span>
        <br />
      </div>
      <span className={styles.space} />

      <h3 className={styles.subHeading} id="python">Python</h3>
      <hr className={styles.hr} />
      <div className={styles.code}>
        <span>&#123;</span>
        <br />
        &ensp; success<span>:</span> "failed" <span>,</span>
        <br />
        &ensp; error<span>:</span> <span>&#123;</span>
        <br />
        &ensp; &ensp; message<span>:</span> "Internal Server Error" <br />
        &ensp;<span>&#125;</span>
        <br />
        <span>&#125;</span>
        <br />
      </div>
      <span className={styles.space} />

      <h3 className={styles.subHeading} id="nodejs">Nodejs</h3>
      <hr className={styles.hr} />
      <div className={styles.code}>
        <span>&#123;</span>
        <br />
        &ensp; success<span>:</span> "failed" <span>,</span>
        <br />
        &ensp; error<span>:</span> <span>&#123;</span>
        <br />
        &ensp; &ensp; message<span>:</span> "Internal Server Error" <br />
        &ensp;<span>&#125;</span>
        <br />
        <span>&#125;</span>
        <br />
      </div>
      <span className={styles.space} />

      <h3 className={styles.subHeading} id="jquery">jQuery</h3>
      <hr className={styles.hr} />
      <div className={styles.code}>
        <span>&#123;</span>
        <br />
        &ensp; success<span>:</span> "failed" <span>,</span>
        <br />
        &ensp; error<span>:</span> <span>&#123;</span>
        <br />
        &ensp; &ensp; message<span>:</span> "Internal Server Error" <br />
        &ensp;<span>&#125;</span>
        <br />
        <span>&#125;</span>
        <br />
      </div>
      <span className={styles.space} />

      <h3 className={styles.subHeading} id="go">Go</h3>
      <hr className={styles.hr} />
      <div className={styles.code}>
        <span>&#123;</span>
        <br />
        &ensp; success<span>:</span> "failed" <span>,</span>
        <br />
        &ensp; error<span>:</span> <span>&#123;</span>
        <br />
        &ensp; &ensp; message<span>:</span> "Internal Server Error" <br />
        &ensp;<span>&#125;</span>
        <br />
        <span>&#125;</span>
        <br />
      </div>
      <span className={styles.space} />

      <h3 className={styles.subHeading} id="ruby">Ruby</h3>
      <hr className={styles.hr} />
      <div className={styles.code}>
        <span>&#123;</span>
        <br />
        &ensp; success<span>:</span> "failed" <span>,</span>
        <br />
        &ensp; error<span>:</span> <span>&#123;</span>
        <br />
        &ensp; &ensp; message<span>:</span> "Internal Server Error" <br />
        &ensp;<span>&#125;</span>
        <br />
        <span>&#125;</span>
        <br />
      </div>
      <span className={styles.space} />
    </div>
  );
};

export default DocumentationText;

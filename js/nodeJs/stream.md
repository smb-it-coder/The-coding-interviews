In Node.js, streams represent a sequential flow of data. Unlike traditional methods that load entire datasets into memory at once, streams handle data in chunks, making them memory-efficient for dealing with large amounts of data or real-time data sources.

There are four fundamental types of streams in Node.js:

1. **Readable Streams:** These are streams from which data can be read. They provide an interface to consume data coming from a source like a file, network connection, or another stream.  A common example is `fs.createReadStream` used to read data from a file chunk by chunk.

2. **Writable Streams:** These are streams to which data can be written. They offer an interface to write data to a destination like a file, network connection, or another stream. An example is `fs.createWriteStream` used to write data to a file chunk by chunk.

3. **Duplex Streams:** These are a combination of readable and writable streams, allowing data to flow in both directions. Network sockets created using `net.Socket` are a typical example of duplex streams.

4. **Transform Streams:** These are a special type of duplex stream that can modify or transform the data as it's being read or written. The `zlib.createGzip` stream used for data compression is an example of a transform stream.

Here are some scenarios where you might use readable and writable streams:

**Readable Streams:**

* **Reading large files:** When dealing with large files, reading the entire file into memory at once can be resource-intensive. Readable streams enable you to process the file content in chunks, improving memory usage and performance.
* **Consuming data from network connections:** Network requests and responses often involve large data streams. Readable streams allow you to process incoming data incrementally as it arrives, without waiting for the entire response to be downloaded.
* **Real-time data processing:** In scenarios involving real-time data feeds (e.g., sensor data, chat applications), readable streams are ideal for handling the continuous flow of data for processing or visualization.

**Writable Streams:**

* **Writing large files:** Similar to reading large files, writable streams enable you to write data to a file in chunks, avoiding memory limitations. This is useful for generating large files or logs.
* **Uploading data to servers:** Uploading large files to a server can be achieved efficiently using writable streams. The data can be sent in chunks, improving performance and reducing memory usage on the client-side.
* **Creating logs or reports:** When generating log files or reports, writable streams allow you to write data incrementally to the destination file, avoiding memory issues and enabling real-time log viewing.

By understanding streams and their different types, you can develop Node.js applications that handle data efficiently, especially when dealing with large datasets or real-time scenarios.
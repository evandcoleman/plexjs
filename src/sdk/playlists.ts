/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { playlistsAddPlaylistContents } from "../funcs/playlistsAddPlaylistContents.js";
import { playlistsClearPlaylistContents } from "../funcs/playlistsClearPlaylistContents.js";
import { playlistsCreatePlaylist } from "../funcs/playlistsCreatePlaylist.js";
import { playlistsDeletePlaylist } from "../funcs/playlistsDeletePlaylist.js";
import { playlistsGetPlaylist } from "../funcs/playlistsGetPlaylist.js";
import { playlistsGetPlaylistContents } from "../funcs/playlistsGetPlaylistContents.js";
import { playlistsGetPlaylists } from "../funcs/playlistsGetPlaylists.js";
import { playlistsUpdatePlaylist } from "../funcs/playlistsUpdatePlaylist.js";
import { playlistsUploadPlaylist } from "../funcs/playlistsUploadPlaylist.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "./models/operations/index.js";
import { unwrapAsync } from "./types/fp.js";

export class Playlists extends ClientSDK {
    /**
     * Create a Playlist
     *
     * @remarks
     * Create a new playlist. By default the playlist is blank. To create a playlist along with a first item, pass:
     * - `uri` - The content URI for what we're playing (e.g. `server://1234/com.plexapp.plugins.library/library/metadata/1`).
     * - `playQueueID` - To create a playlist from an existing play queue.
     *
     */
    async createPlaylist(
        request: operations.CreatePlaylistRequest,
        options?: RequestOptions
    ): Promise<operations.CreatePlaylistResponse> {
        return unwrapAsync(playlistsCreatePlaylist(this, request, options));
    }

    /**
     * Get All Playlists
     *
     * @remarks
     * Get All Playlists given the specified filters.
     */
    async getPlaylists(
        playlistType?: operations.PlaylistType | undefined,
        smart?: operations.QueryParamSmart | undefined,
        options?: RequestOptions
    ): Promise<operations.GetPlaylistsResponse> {
        return unwrapAsync(playlistsGetPlaylists(this, playlistType, smart, options));
    }

    /**
     * Retrieve Playlist
     *
     * @remarks
     * Gets detailed metadata for a playlist. A playlist for many purposes (rating, editing metadata, tagging), can be treated like a regular metadata item:
     * Smart playlist details contain the `content` attribute. This is the content URI for the generator. This can then be parsed by a client to provide smart playlist editing.
     *
     */
    async getPlaylist(
        playlistID: number,
        options?: RequestOptions
    ): Promise<operations.GetPlaylistResponse> {
        return unwrapAsync(playlistsGetPlaylist(this, playlistID, options));
    }

    /**
     * Deletes a Playlist
     *
     * @remarks
     * This endpoint will delete a playlist
     *
     */
    async deletePlaylist(
        playlistID: number,
        options?: RequestOptions
    ): Promise<operations.DeletePlaylistResponse> {
        return unwrapAsync(playlistsDeletePlaylist(this, playlistID, options));
    }

    /**
     * Update a Playlist
     *
     * @remarks
     * From PMS version 1.9.1 clients can also edit playlist metadata using this endpoint as they would via `PUT /library/metadata/{playlistID}`
     *
     */
    async updatePlaylist(
        playlistID: number,
        title?: string | undefined,
        summary?: string | undefined,
        options?: RequestOptions
    ): Promise<operations.UpdatePlaylistResponse> {
        return unwrapAsync(playlistsUpdatePlaylist(this, playlistID, title, summary, options));
    }

    /**
     * Retrieve Playlist Contents
     *
     * @remarks
     * Gets the contents of a playlist. Should be paged by clients via standard mechanisms.
     * By default leaves are returned (e.g. episodes, movies). In order to return other types you can use the `type` parameter.
     * For example, you could use this to display a list of recently added albums vis a smart playlist.
     * Note that for dumb playlists, items have a `playlistItemID` attribute which is used for deleting or moving items.
     *
     */
    async getPlaylistContents(
        playlistID: number,
        type: operations.GetPlaylistContentsQueryParamType,
        options?: RequestOptions
    ): Promise<operations.GetPlaylistContentsResponse> {
        return unwrapAsync(playlistsGetPlaylistContents(this, playlistID, type, options));
    }

    /**
     * Delete Playlist Contents
     *
     * @remarks
     * Clears a playlist, only works with dumb playlists. Returns the playlist.
     *
     */
    async clearPlaylistContents(
        playlistID: number,
        options?: RequestOptions
    ): Promise<operations.ClearPlaylistContentsResponse> {
        return unwrapAsync(playlistsClearPlaylistContents(this, playlistID, options));
    }

    /**
     * Adding to a Playlist
     *
     * @remarks
     * Adds a generator to a playlist, same parameters as the POST to create. With a dumb playlist, this adds the specified items to the playlist.
     * With a smart playlist, passing a new `uri` parameter replaces the rules for the playlist. Returns the playlist.
     *
     */
    async addPlaylistContents(
        playlistID: number,
        uri: string,
        playQueueID?: number | undefined,
        options?: RequestOptions
    ): Promise<operations.AddPlaylistContentsResponse> {
        return unwrapAsync(
            playlistsAddPlaylistContents(this, playlistID, uri, playQueueID, options)
        );
    }

    /**
     * Upload Playlist
     *
     * @remarks
     * Imports m3u playlists by passing a path on the server to scan for m3u-formatted playlist files, or a path to a single playlist file.
     *
     */
    async uploadPlaylist(
        path: string,
        force: operations.QueryParamForce,
        options?: RequestOptions
    ): Promise<operations.UploadPlaylistResponse> {
        return unwrapAsync(playlistsUploadPlaylist(this, path, force, options));
    }
}

define(['bounds', 'dimension'], function() {
    /**
      * A regular grid, consisting of clusters with equal shape and size and the possibility to be identified 
      * by the row and column they're in.
      * 
      * @param {*} bounds the bounds the grid should be applied on
      * @param {*} rows the number of rows
      * @param {*} columns the number of columns
      * @param {*} gridLevels the number of gridlevels
      */
    function Grid(bounds, rows, columns, gridLevels) {
        this.bounds = bounds;
        this.rows = Number(rows);
        this.columns = Number(columns);
        this.gridLevels = Number(gridLevels);
    }

    /**
      * Set the bounds of this grid.
      * 
      * @param {*} bounds the bounds
      */
    Grid.prototype.setBounds = function(bounds) {
        this.bounds = bounds;
    }
    /**
      * Get the bounds of this grid.
      */
    Grid.prototype.getBounds = function() {
        return this.bounds;
    }
    /**
      * Set the number of rows.
      * 
      * @param {*} rows the rows
      */
    Grid.prototype.setRows = function(rows) {
        this.rows = Number(rows);
    }
    /**
      * Get the number of rows.
      */
    Grid.prototype.getRows = function() {
        return this.rows;
    }
    /**
      * Set the number of columns.
      * 
      * @param {*} columns the columns
      */
    Grid.prototype.setColumns = function(columns) {
        this.columns = Number(columns);
    }
    /**
      * Get the number of columns.
      */
    Grid.prototype.getColumns = function() {
        return this.columns;
    }
    /**
      * Set the number of gridlevels.
      * 
      * @param {*} gridLevels the gridlevels
      */
    Grid.prototype.setGridLevels = function(gridLevels) {
        this.gridLevels = Number(gridLevels);
    }
    /**
      * Get the number of gridlevels.
      */
    Grid.prototype.getGridLevels = function() {
        return this.gridLevels;
    }

    /**
      * Get the identifier of this grid.
      */
    Grid.prototype.getGridID = function() { }

    /**
      * Get the cluster containing the submitted coordinate at the given gridlevel.
      * 
      * @param {*} coordinate the coordinate
      * @param {*} gridLevel the gridlevel
      */
    Grid.prototype.getClusterContainingCoordinate = function(coordinate, gridLevel) { }

    /**
      * Get the clusters that are completely or partially contained in the submitted bounds.
      * 
      * @param {*} bounds the bounds
      * @param {*} gridLevel the gridlevel
      */
    Grid.prototype.getClustersContainedInBounds = function(bounds, gridLevel) { }

    /**
      * Returns the coordinate in the submitted bounds that is closest to the given coordinate.
      */
    Grid.prototype.closestCoordinateInBounds = function(bounds, coordinate) {
        if (bounds.contains(coordinate)) {
            return coordinate;
        }

        var x = coordinate[0];
        var y = coordinate[1];

        if (bounds.getMinX() > x) {
            x = bounds.getMinX();
        } else if (bounds.getMaxX() < x) {
            x = bounds.getMaxX();
        }

        if (bounds.getMinY() > y) {
            y = bounds.getMinY();
        } else if (bounds.getMaxY() < y) {
            y = bounds.getMaxY();
        }

        return [x, y];
    };

    /**
      * Returns the identifiers of the sub clusters of the submitted cluster.
      * 
      * @param {*} cluster the cluster
      */
    Grid.prototype.getSubClusterIDs = function(cluster) { }

    /**
      * Returns whether the submitted is a valid cluster identifier
      * 
      * @param {*} input the input
      */
    Grid.prototype.isValidClusterID = function(input) { }

    return Grid;
});